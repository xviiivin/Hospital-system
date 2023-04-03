<template >
  <div class="flex justify-center">
    <div v-if="!image">
      <div class="rounded-lg w-[250px] h-[250px] flex items-center ">
        <input type="file" name="" id="" @change="onFileChange">
      </div>
    </div>

    <div v-else>
      <div class="w-[350px] h-[350px]">
        <img :src="image" class="w-full h-full block object-cover rounded-lg">
        <div class="flex justify-end p-2 ">
          <img src="../../assets/cancel.png" @click="removeImage" class="block absolute top-[50px] w-[30px] h-[30px]">
        </div>
      </div>
    </div>
  

  </div>
</template>
<script>
export default {
  data() {
    return {
      image: null,
    }
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.createImage(files[0]);
      console.log("เลือกไฟล์แล้ว");
    },

    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function (e) {
      this.image = '';
    }
  },
}
</script>
<style ></style>