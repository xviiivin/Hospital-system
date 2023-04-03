<template>
  <AppLayout>
    <div class=" flex flex-col items-center flex-grow">
      <!-- top -->
      <div class="bg-primary h-[10%] w-full rounded-b-3xl">
        <img class="mt-36 mx-auto" src="../assets/Navbar/Logo.png" alt="" />
      </div>
      <!-- body -->
      <div class="mt-[2%] w-fit flex flex-col items-center">
        <p class="text-center text-4xl">Register</p>
        <div class="bg-gradient-to-r w-full from-[#111727] to-[#FF5757] h-1 rounded-full mt-2"></div>
        <p class="text-[#70737D] text-md mt-3">Login, W&N Hospital is ready to serve you.</p>
      </div>
      <form @submit.prevent="register">
        <div class="flex flex-col">
          <input v-model='name' type="text" required class="border border-black rounded-full p-2 px-12 mt-4 mb-4 text-lg"
            placeholder="Name" />
          <input v-model='idcard' type="text" required class="border border-black rounded-full p-2 px-12 mb-4 text-lg"
            placeholder="Id-card" />
          <input v-model='password' type="text" required class="border border-black rounded-full p-2 px-12 mb-4 text-lg"
            placeholder="password" />
          <input v-model='phone' type="text" required class="border border-black rounded-full p-2 px-12 mb-2 text-lg"
            placeholder="phone number" />
          <button type="submit" class="w-full bg-primary text-white text-lg font-semibold py-4 rounded-md mb-4 mt-10">
            Register
          </button>
          <p class="text-sm xl:text-md text-gray-400 text-center mb-8">Have an account? <a @click="this.$router.push('/login')"
              class="text-black/70 cursor-pointer">Back to login ✨</a></p>
        </div>
      </form>

    </div>
  </AppLayout>
</template>
  
<script>
import AppLayout from "../components/AppLayout.vue";
import Nav from "../components/users/MainNav.vue";
import axios from "axios";
export default {
  components: {
    AppLayout,
    Nav,
  },
  data() {
    return {
      lastcard: ["Name", "Id-card", "password", "phone number"],
      name: '', idcard: '', password: '', phone: ''
    };
  },
  methods: {
    // ifelse condition
    async showAlert() {
      // Use sweetalert2
      const Toast = await this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    },
    async register() {
      const data = {
        name: this.name, idCard: this.idcard, password: this.password, phone: this.phone
      }
      if ((this.idcard.length !== 13)) {
        this.$swal.fire(
          'Your idcard must be 13 characters',
          'You clicked the button!',
          'error'
        )
      } else {
        const result = await axios.post('http://localhost:8080/api/auth/register', data)
        console.log(result.data)
        if (result.data.status === "errorid") {
          this.$swal.fire(
            'Idcard already use!',
            'You clicked the button!',
            'error'
          )
        }
        else if (result.data.status === "errorphone") {
          this.$swal.fire(
            'Phonenumber already use!',
            'You clicked the button!',
            'error'
          )
        } else {

          await this.showAlert()
          await this.$router.push('/login')
        }
      }
    }
  },

};
</script>
  
<style></style>
  