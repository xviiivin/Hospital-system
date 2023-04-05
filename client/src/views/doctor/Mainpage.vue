<template>
  <div class="w-full mx-auto">
    <DocNav1 />
    <div class="mx-auto container">

      <search />
    </div>
  </div>
</template>

<script>

import search from "../../components/doctor/Search.vue"

import DocNav1 from "../../components/doctor/Navbarch1.vue"
export default {
  components: {

    
    search, DocNav1
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style></style>
