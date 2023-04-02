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
        class="relative h-full w-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white ">
        <div class="w-full h-full p-6 m-5">
            <div class="w-full h-full space-y-10 " v-for="(val, index) in userInfo" :key="index">
                <div class=" flex justify-center  ">
                  <!-- <div v-if="!image">
                    <input type="file" name="" id="" @change="onFileChange">
                  </div>

                  <div v-else>
                    <img  :src="image" width="400px">
                  </div> -->
                  
                  <div class="h-[calc(100%+2rem)] w-[calc(100%-1rem)] rounded-xl  overflow-hidden cursor-pointer bg-[#111727]">
                    <img class="h-full w-full" :src="val.image"
                    />
                  </div>
                </div>
                <div class="text-black font-semibold text-md mt-5 space-y-10">
                       <Info />
                  
                </div>

                <div class="space-x-5 text-white flex justify-end">
                  <button class="rounded-lg bg-slate-800 p-2 px-5 ">Save</button>
                  <button class="rounded-lg p-2  bg-rose-900">
                    Cancel
                  </button>
                </div>
              <!-- </div> -->
            
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
      
<script>
import AppLayout from "../../components/AppLayout.vue";
import Nav from "../../components/users/MainNav.vue";
import pic2 from "../../assets/doctorPic1.png";
import Info from "../../components/Addinfo.vue"

export default {
  components: {
    AppLayout,
    Nav,
    Info
  },
  data: () => ({
    image: '',
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
        image: pic2,
      },
    ],

    methods: {
      onFileChange(e){
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length){
          return;
        }
        this.createImage(files[0]);
        console.log('เลือกไฟล์แล้ว');

      },

      createImage(file){
        var image = new Image();
        var reader = new FileReader();
        var vm = this;
        reader.onload=(e)=>{
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },




    }

  }),
};
</script>
      
<style></style>
      