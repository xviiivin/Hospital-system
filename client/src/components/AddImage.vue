<template>
  <div class="flex justify-center">
    <div v-if="!image">
      <div class="rounded-lg w-[250px] h-[250px] flex items-center">
        <input type="file" name="" id="" @change="onFileChange(userId)" />
      </div>
    </div>

    <div v-else class="mb-12">
      <div class="w-[350px] h-[350px]">
        <img :src="image" class="w-full h-full block object-cover rounded-lg" />
        <div class="flex justify-end p-2">
          <button src="../../assets/cancel.png" @click="removeFile()" class="border boder-black bg-[#FF5757] text-white p-2 rounded-lg">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref as storageRef, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
export default {
  data() {
    return {
      image: "",
      userId: "",
    };
  },
  mounted() {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    if (userId) {
      this.userId = userId;
      this.getFile(this.userId);
    }
  },
  methods: {
    async getFile(userId) {
      try {
        const storage = useFirebaseStorage();
        const starsRef = storageRef(storage, "users/" + userId);
        const search = await listAll(starsRef);
        const download = (await getDownloadURL(search.items[0])).toString();
        this.image = download;
      } catch (error) {
        console.log(error);
      }
    },
    async removeFile(userId) {
      try {
        const storage = useFirebaseStorage();
        const starsRef = storageRef(storage, "users/" + userId);
        const search = await listAll(starsRef);
        const remove = await deleteObject(search.items[0]);
        console.log(remove)
        this.image = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style></style>
