<template>
  <AppLayout>
    <Nav />
    <div class="bg-[#111727]">
      <div class="h-24 p-4 container mx-auto">
        <router-link style="cursor: pointer; text-decoration: none" to="/">
          <img src="../../assets/back 1@2x.png" alt="" class="w-8 cursor-pointer" />
        </router-link>
      </div>
    </div>
    <div class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]">
      <!-- body -->
      <div class="relative h-full w-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white">
        <div class="w-full h-full p-6 m-5 ">
          <div class="w-full h-full space-y-10">
            <Image />
            <div class="text-black font-semibold text-md  space-y-10">
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
import Image from "../../components/AddImage.vue"
export default {
  components: {
    AppLayout,
    Nav,
    Info, Image
  },
  data: () => ({
  }),
};
</script>
      
<style></style>
      