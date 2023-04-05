<template>
  <div class="w-full mx-auto">
    <DocNav1 />
    
    <div class="grid grid-cols-12 mt-24">
      <div class="col-start-2 col-end-6">
        <p class="font-bold text-center mb-6">You can add your picture image here!</p>
        <div class="text-center">
          <Image />
        </div>
      </div>

      <div class="col-start-6 col-end-12 bg-[#E6E6E6] w-full h-auto px-10 py-5 mb-12">
        <Info />
      </div>
      <div class="col-start-11 col-end-13">
        <button class="bg-[#111727] border-2 boder-black text-white p-4 rounded-lg">Save All</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppLayout from "../../components/AppLayout.vue";
import Image from "../../components/AddImage.vue";
import DocNav1 from "../../components/doctor/Navbarch1.vue";
import Info from "../../components/Addinfo.vue";
export default {
  components: {
    AppLayout,
    DocNav1,
    Image,
    Info,
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style></style>
