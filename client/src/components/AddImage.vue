<template>
  <div class="flex justify-center">
    <div v-if="!image" @submit.prevent="uploadFile">
      <div class="rounded-lg w-[250px] h-[250px] flex items-center">
        <input
          type="file"
          @change="
            (event) => {
              uploadFile(event);
            }
          "
        />
      </div>
    </div>

    <div v-else class="mb-12">
      <div class="w-[350px] h-[350px]">
        <img :src="image" class="w-full h-full block object-cover rounded-lg" />
        <div class="flex justify-end p-2">
          <button src="../../assets/cancel.png" @click="removeFile(userId)" class="border boder-black bg-[#FF5757] text-white p-2 rounded-lg">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref as storageRef, getDownloadURL, listAll, deleteObject, uploadBytes } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
const storage = useFirebaseStorage();

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
    async uploadFile(event) {
      try {
        const file = event.target.files[0];
        const starsRef = storageRef(storage, `users/${this.userId}/${file.name}`);
        await uploadBytes(starsRef, file);
        this.getFile(this.userId);
      } catch (error) {
        console.log(error);
      }
    },
    async getFile(userId) {
      try {
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
        const starsRef = storageRef(storage, "users/" + userId);
        const search = await listAll(starsRef);
        const remove = await deleteObject(search.items[0]);
        console.log(remove);
        this.image = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style></style>
