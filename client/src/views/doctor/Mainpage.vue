<template>
  <div class="h-screen w-full mx-auto flex flex-col">
    <DocNav1 />
    <div class="mx-auto container flex-grow">
      <search />
    </div>
  </div>
</template>

<script>
import search from "../../components/doctor/Search.vue";

import DocNav1 from "../../components/doctor/Navbarch1.vue";
export default {
  components: {
    search,
    DocNav1,
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style></style>
