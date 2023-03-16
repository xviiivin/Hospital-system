<template>
  <AppLayout>
    <div class="w-full h-full flex flex-col items-center flex-grow">
      <div class="h-2/5 relative w-full">
        <div class="bg-primary h-2/3 flex justify-center rounded-b-3xl">
          <img class="absolute top-1/3" src="../assets/Navbar/Logo.png" alt="" />
        </div>
      </div>
      <div class="w-fit flex flex-col items-center">
        <p class="text-center text-4xl">Welcome</p>
        <div class="bg-gradient-to-r w-full from-[#111727] to-[#FF5757] h-1 rounded-full mt-2"></div>
        <p class="text-[#70737D] text-xs mt-3">Login, W&N Hospital is ready to serve you.</p>
      </div>
      <div class="flex flex-col w-2/3 mt-10 gap-y-5">
        <input type="text" class="border border-black rounded-full p-2 px-4" placeholder="id number" />
        <input type="text" class="border border-black rounded-full p-2 px-4" placeholder="password" />
        <button class="w-full bg-primary text-white font-semibold py-2 rounded-md mt-10">Login</button>
        <p class="text-sm text-gray-300 text-center">Don’t have an account? <a href="/login" class="text-black/60">Sign up free ✨</a></p>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../components/AppLayout.vue";
import Nav from "../components/users/Usernav.vue";
export default {
  components: {
    AppLayout,
    Nav,
  },
};
</script>

<style></style>
