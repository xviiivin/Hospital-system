<template>
  <AppLayout>
    <div class="flex flex-col items-center flex-grow h-full">
      <div class="w-full h-64">
        <div class="bg-primary w-full h-3/5 rounded-b-3xl relative flex flex-col items-center">
          <img class="absolute top-[20%] mx-auto" src="../assets/Navbar/Logo.png" alt="" />
        </div>
      </div>

      <div class="mt-5 w-fit flex flex-col items-center">
        <p class="text-center text-4xl">Welcome</p>
        <div class="bg-gradient-to-r w-full from-[#111727] to-[#FF5757] h-1 rounded-full mt-2"></div>
        <p class="text-[#70737D] xl:text-md lg:text-md text-xs mt-3">Login, W&N Hospital is ready to serve you.</p>
      </div>
      <div class="flex flex-col w-3/4 xl:w-1/3 mt-10 gap-y-5">
        <input v-model="idcard" type="text" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="Id-card" />
        <input v-model="password" type="password" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="password" />
        <button class="w-full bg-primary text-white text-lg font-semibold py-2 rounded-md mt-5" @click="login()">Login</button>
        <p class="text-sm xl:text-md text-gray-400 text-center">
          Don’t have an account? <a @click="this.$router.push('/Register')" class="text-black/70 cursor-pointer">Sign up free ✨</a>
        </p>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../components/AppLayout.vue";
import Nav from "../components/users/MainNav.vue";
import axios from "axios";
export default {
  data() {
    return {
      idcard: "",
      password: "",
    };
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
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    },

    async login() {
      try {
        if (this.idcard === "" && this.password === "") {
          throw new Error("Please fill in all fields");
        }
        const res = await axios.post("http://localhost:8080/api/auth/login", {
          idCard: this.idcard,
          password: this.password,
        });
        const user = res.data.user;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", res.data.accessToken);

        if (user.role == "ADMIN") {
          this.$router.push("/admin/users");
        } else if (user.role == "DOCTOR") {
          this.$router.push("/doctor/");
        } else if (user.role == "USER") {
          this.$router.push("/");
        }
        await this.showAlert();
      } catch (error) {
        console.log(error);
        if (error.message === "Please fill in all fields") {
          this.$swal.fire({
            icon: "error",
            text: "plase type all!",
          });
        } else if (error?.response?.data?.message === "Wrong password") {
          this.$swal.fire({
            icon: "error",
            text: "Wrong password!",
          });
        } else if (error?.response?.data?.message === "User not found") {
          this.$swal.fire({
            icon: "error",
            text: "User not found!",
          });
        }
      }
    },
  },
  mounted() {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
