<template>
  <AppLayout>
    <Nav />
    <div class="bg-[#111727]">
      <div class="h-24 p-4 container mx-auto">
        <router-link style="cursor: pointer; text-decoration: none" to="/user/hospital">
          <img src="../../assets/back 1@2x.png" alt="" class="w-8 cursor-pointer" />
        </router-link>
      </div>
    </div>
    <div class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]">
      <!-- body -->
      <div class="relative h-full w-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white">
        <div class="w-full h-full px-8">
          <div class="mt-5">
            <p class="text-2xl font-extrabold my-8 text-[#111727]">{{ hospitalInfo.name }}</p>
            <div class="w-full mb-6 cursor-pointer" v-for="(val, index) in symptomRecord" :key="index">
              <div class="">
                <p class="mb-2">
                  {{
                    new Date(val.createdAt).toLocaleString("TH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      second: "numeric",
                    })
                  }}
                </p>
                <div
                  class="group w-full rounded-xl bg-[#111727] group-hover:bg-black ease-out duration-300 overflow-hidden">
                  <div class="rounded-xl bg-[#FBFBFF] w-full h-1/3 top-0 border border-[#000000] border-opacity-[33%]">
                    <div class="p-3 ml-3 text-[#202C4B]">
                      <p class="font-semibold text-lg mb-3">Symptom</p>
                      <p class="font-extralight text-sm">{{ val.description }}</p>
                    </div>
                  </div>
                  <router-link style="cursor: pointer; text-decoration: none" :to="`/detail/${val.id}`">
                    <div class="mx-5 ml-0 w-full h-full p-3">
                      <p class="text-md text-bold text-white font-semibold text-center">details</p>
                    </div>
                  </router-link>
                </div>
              </div>
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
import axios from "axios";

export default {
  components: {
    AppLayout,
    Nav,
  },
  data: () => ({
    userId: JSON.parse(localStorage.getItem("user")).id,
    symptomRecord: [],
    hospitalId: "",
    hospitalInfo:{}
  }),
  mounted() {
    this.hospitalId = this.$route.params.id;
    this.getSymptomRecord();
    this.getDownloadURL(this.hospitalId)
  },
  methods: {
    async getSymptomRecord() {
      try {
        const res = await axios.get("http://localhost:8080/api/treatment/all/" + this.hospitalId);
        console.log(res.data)
        this.symptomRecord = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getDownloadURL(id){
      const check1 = await axios.get(`http://localhost:8080/api/hospital/${id}`)
      this.hospitalInfo = check1.data;
    }
  },
};
</script>

<style></style>
