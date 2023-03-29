<template>
  <div>
    <!-- @change="FileSelect" -->
    <!-- @change="onfilechange" -->
    <div v-if="!image">
      <input type="file" >
    </div>
    <div v-else>
      <img :src="image" />
    </div>

    <!-- <button @click="uploadpic">Upload</button> -->
  </div>
</template>

<script>
// import axios from "axios";
export default {

  data() {
    return
    {
      image: '';
      selectthefile: null
    }
  },
  methods: {
    // เชคว่ามีไม่มีfile
    onfilechange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      console.log("u already choose file");
      console.log(files[0])

    },
    // สร้างรูปภาพเอามาโชว์
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var check = this
      reader.onload = (e) => {
        check.image = e.target.result;
      };
      console.log(reader.readAsDataURL(image));
      reader.readAsDataURL(image);
    }
    // FileSelect(event) {
    //   console.log(event);
    //   this.selectthefile = event.target.files[0]
    // },
    // uploadpic() {
    //   const file = new FormData();
    //   file.append('image', this.selectthefile, this.selectthefile.name)
    //   axios.post('url', file,
    //     {
    //       onUploadProgress: uploadEvent => {
    //         console.log("upload%:" + Math.round(uploadEvent.loaded / uploadEvent.total) * 100 + "%")
    //       }
    //     }
    //   ).then(res => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>

<style></style>