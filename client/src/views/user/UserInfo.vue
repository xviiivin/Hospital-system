<template>
  <AppLayout>
    <Nav />
    <div class="bg-[#111727]">
      <div class="h-24 p-4 container mx-auto">
        <router-link style="cursor: pointer; text-decoration: none" to="/">
          <img
            src="../../assets/back 1@2x.png"
            alt=""
            class="w-8 cursor-pointer"
          />
        </router-link>
      </div>
    </div>
    <div
      class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]"
    >
      <!-- body -->
      <div
        class="relative h-full w-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white" >
        <div class="w-full h-full p-6 m-5 ">
          <div class="w-full h-full space-y-10" v-for="(val, index) in userInfo" :key="index">
            <div class="flex justify-center">
              <div v-if="!image">
                 <div class="rounded-lg w-[250px] h-[250px] flex items-center ">
                    <input type="file" name="" id=""  @change="onFileChange">
                </div>
              </div>

              <div v-else >
                <div class="w-[350px] h-[350px]">
                    <img :src="image" class="w-full h-full block object-cover rounded-lg">
                  <div class="flex justify-end p-2 ">
                    <img src="../../assets/cancel.png" @click="removeImage" class="block absolute top-[50px] w-[30px] h-[30px]">
                  </div>
                </div>
              </div>


            </div>
            <div class="text-black font-semibold text-md mt-5 space-y-10">
              <Info />
            </div>


            <div class="space-x-5 text-white flex justify-end">
              <button class="rounded-lg bg-slate-800 p-2 px-5">Save</button>
              <button class="rounded-lg p-2 bg-rose-900">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
      
<script>
import AppLayout from "../../components/AppLayout.vue";
import Nav from "../../components/users/MainNav.vue";
import Info from "../../components/Addinfo.vue";

export default {
  components: {
    AppLayout,
    Nav,
    Info,
  },
  data: () => ({
    image: null,
    userInfo: [
      {
        userId: "1234",
        name: "wiranyupa petch-in",
        age: "19",
        sex: "female",
        weight: "40",
        height: "162",
        bloodType: "b",
        nationality: "thai",
        occupation: "student",
        address: "888/88 chonburi, Thailand",
        religion: "Buddhist",
        userImage: "",
      }
    ]
  }) ,


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

    removeImage:function(e){
      this.image = '';
    }
  },
};
</script>
      
<style></style>
      