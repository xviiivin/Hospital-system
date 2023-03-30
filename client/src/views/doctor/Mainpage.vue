<template>
  <AppLayout>
    <div class="w-full mx-auto">
      <DocNav1 />
      <div class="mx-auto container">
        <!-- search -->


        <!-- <div class="text-center mt-[5em] mb-[10px] text-2xl font-bold uppercase tracking-wide">Search patient</div>
        <div class="flex justify-center">
          <div class="flex text-gray-600 rounded-full border-2 border-gray-200 w-fit transition-all duration-500 items-center px-2">
            <input
              type="search"
              name="serch"
              class="bg-white h-30 p-5 pr-10 rounded-full text-sm text-[1.4em] outline-none flex w-[300px] transition-all duration-700 focus:w-[600px]"
            />
            <button type="submit" class="bg-black py-2 rounded-full text-white px-5">Search</button>
          </div>
        </div> -->

        <!-- body -->


        <!-- <div class="mt-10" :class="{ 'hidden': isActive }">
          <p>2222</p>
        </div> -->

        <search />
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../../components/AppLayout.vue";
import search from "../../components/doctor/Search.vue"
import Docnav from "../../components/doctor/Docnav.vue";
import DocNav1 from "../../components/doctor/Navbarch1.vue"
export default {
  components: {
    AppLayout,
    Docnav,
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
