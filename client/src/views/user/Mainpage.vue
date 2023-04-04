<template>
  <AppLayout>
    <div class="flex flex-col h-full">
      <Nav />
      <div class="flex flex-col items-center flex-grow bg-white relative">
        <img class="absolute top-0 left-0 w-full flex object-cover z-0 h-full" src="../../assets/room.png" />
        <div class="w-full px-10 pt-5 py-20 flex flex-col items-start z-10">
          <p class="text-[#6F6565] mt-10 text-2xl mr-5">Welcome, <span class="font-medium">Justin</span></p>

          <div class="flex justify-center w-full space-x-10 mt-12">
            <router-link class="cursor-pointer underline-none" to="/payment1">
              <div class="flex bg-[#202C4B] w-[100px] h-[100px] rounded-full shadow-lg">
                <img class="w-15 h-15 mx-7 self-center" src="../../assets/wallet.png" />
              </div>
              <p class="mt-2 font-light">รายการชำระเงิน</p>
            </router-link>
            <router-link class="cursor-pointer underline-none" to="/hospitalrecord">
              <div class="flex bg-[#202C4B] w-[100px] h-[100px] rounded-full">
                <img class="w-15 h-15 self-center mx-6" src="../../assets/medical-record.png" />
              </div>
              <p class="mt-2 font-light">ประวัติการรักษา</p>
            </router-link>
          </div>
        </div>

        <div class="flex-grow flex flex-col items-start w-full p-5 rounded-t-xl bg-white z-10">
          <p>โรงพยาลที่เข้าร่วมแอพนี้</p>
          <div class="grid grid-cols-2 gap-y-5 mt-5 w-full">
            <router-link
              v-for="(data, index) in datas"
              :key="index"
              :to="`/alldoctor/${data.id}`"
              class="rounded-2xl w-[150px] h-[150px] bg-white group drop-shadow-xl overflow-hidden mx-auto"
            >
              <div class="text-justify justify-center h-full w-full">
                <img class="h-full w-full group-hover:scale-110 ease-in duration-300" src="../../assets/ktp-hos.png" />
              </div>
              <div
                class="rounded-b-xl bg-[#202C4B] opacity-[90%] h-10 absolute flex items-center justify-center w-full bottom-0 group-hover:scale-110 ease-out duration-300"
              >
                <p class="text-sm text-white">{{ data.name }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../../components/AppLayout.vue";
import Nav from "../../components/users/MainNav.vue";
import axios from "axios";
export default {
  data() {
    return {
      datas: [],
    };
  },
  components: {
    AppLayout,
    Nav,
  },
  mounted() {
    this.checked();
    this.getHospital();
  },
  methods: {
    checked() {
      const data = JSON.parse(localStorage.getItem("user"));
      console.log(data);
      if (!data) {
        this.$router.push("/login");
      }
    },
    async getHospital() {
      const res = await axios.get("http://localhost:8080/api/hospital");
      this.datas = res.data;
    },
  },
};
</script>
