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
        <p class="text-center text-4xl">Welcome</p>
        <div class="bg-gradient-to-r w-full from-[#111727] to-[#FF5757] h-1 rounded-full mt-2"></div>
        <p class="text-[#70737D] text-md mt-3">Login, W&N Hospital is ready to serve you.</p>
      </div>
      <div class="flex flex-col w-2/3 xl:w-1/3 mt-10 gap-y-5">
        <input v-model="idcard" type="text" class="border border-black rounded-full p-2 px-4 text-lg"
          placeholder="Id-card" />
        <input v-model='password' type="text" class="border border-black rounded-full p-2 px-4 text-lg"
          placeholder="password" />
        <button class="w-full bg-primary text-white  text-lg font-semibold py-2 rounded-md mt-10 "
          @click="login()">Login</button>
        <p class="text-sm xl:text-md text-gray-400 text-center">Don’t have an account? <a
            @click="this.$router.push('/Register')" class="text-black/70 cursor-pointer">Sign up
            free ✨</a></p>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../components/AppLayout.vue";
import Nav from "../components/users/MainNav.vue";
import axios from 'axios';
export default {
  data() {
    return {
      idcard: '',
      password: ''
    }
  },
  components: {
    AppLayout,
    Nav,
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


    async login() {
      try {
        const data = {
          idCard: this.idcard, password: this.password
        }
        console.log(data);
        const res = await axios.post('http://localhost:8080/api/auth/login', data)
        console.table(res.data)
        await this.showAlert();
        await this.$router.push('/');
      } catch (error) {
        console.log(error.response.data.message)
        if (error.response.data.message == 'Wrong password') {
          this.$swal.fire(
            'Wrong password!',
            'You clicked the button!',
            'error')
        }
        else {
          this.$swal.fire(
            'User not found!',
            'You clicked the button!',
            'error'
          )
        }
      }

    }
  },
};
</script>

<style></style>
