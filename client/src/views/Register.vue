<template>
  <AppLayout>
    <div class="w-full h-full flex flex-col items-center flex-grow">
      <!-- top -->
      <div class="h-2/5 relative w-full">
        <div class="bg-primary h-2/3 flex justify-center rounded-b-3xl">
          <img class="absolute top-1/3" src="../assets/Navbar/Logo.png" alt="" />
        </div>
      </div>
      <!-- body -->
      <div class="w-fit flex flex-col items-center">
        <p class="text-center text-4xl">Register</p>
        <div class="bg-gradient-to-r w-full from-[#111727] to-[#FF5757] h-1 rounded-full mt-2"></div>
      </div>
      <div class="flex flex-col w-2/3 xl:w-1/3 mt-10 gap-y-5">
        <input type="text" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="Name" />
        <input type="text" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="Id-card" />
        <input type="text" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="password" />
        <input type="number" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="phone number" />
        <router-link style="cursor: pointer; text-decoration: none" to="/login">
          <button class="w-full bg-primary text-white text-lg font-semibold py-2 rounded-md mt-10" @click="showAlert">
            Register
          </button>
        </router-link>
      </div>
    </div>
  </AppLayout>
</template>
  
<script>
import AppLayout from "../components/AppLayout.vue";
import Nav from "../components/users/MainNav.vue";
export default {
  components: {
    AppLayout,
    Nav,
  },
  data() {
    return {
      lastcard: ["Name", "Id-card", "password", "phone number"],
    };
  },
  methods: {
    // ifelse condition
    showAlert() {
      // Use sweetalert2
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    },
  },
};
</script>
  
<style></style>
  