<template>
  <AppLayout>
    <Nav />
    <div class="w-full h-screen">
      <div class="bg-[#111727]">
        <div class="h-24 p-4 container mx-auto">
          <router-link style="cursor: pointer; text-decoration: none" :to="`/`">
            <img src="../../assets/back 1@2x.png" alt="" class="w-8 cursor-pointer" />
          </router-link>
        </div>
      </div>
      <div class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]">
        <!-- body -->
        <div class="relative h-full w-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white">
          <div class="w-full h-full px-8">
            <div class="mt-5">
              <symtom :treatment="treatment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script>
import Nav from "../../components/users/MainNav.vue";
import AppLayout from "../../components/AppLayout.vue";
import symtom from "../../components/users/Symtom.vue";
import axios from "axios";
export default {
  components: {
    AppLayout,
    symtom,
    Nav,
  },
  data: () => {
    return {
      treatmentId: "",
      treatment: {},
    };
  },
  methods: {
    async getTreatmentId() {
      
      try {
        const res = await axios.get("http://localhost:8080/api/treatment/" + this.treatmentId);
        console.log(res.data)
        this.treatment = res.data[0];
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.treatmentId = this.$route.params.id;
    this.getTreatmentId();
  },
};
</script>
<style></style>
