<template>
  <AppLayout>
    <div class="flex flex-col items-center flex-grow h-full">
      <!-- top -->
      <div class="w-full h-64">
        <div class="bg-primary w-full h-3/5 rounded-b-3xl relative flex flex-col items-center">
          <img class="absolute top-[20%] mx-auto" src="../assets/Navbar/Logo.png" alt="" />
        </div>
      </div>
      <!-- body -->
      <div class="w-2/3 flex flex-col items-center">
        <p class="text-center text-4xl">Register</p>
        <div class="bg-gradient-to-r w-full from-[#111727] to-[#FF5757] h-1 rounded-full mt-2"></div>
        <p class="text-[#70737D] text-xs mt-3">W&N Hospital is ready to serve you.</p>
      </div>
      <div class="flex flex-col w-3/4 xl:w-1/3 mt-10 gap-y-5">
        <input v-model="name" type="text" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="Name" />
        <input v-model="idcard" type="text" max="13" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="Id-card" />
        <input v-model="password" type="text" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="password" />
        <input v-model="phone" type="text" max="10" class="border border-black rounded-full p-2 px-4 text-lg" placeholder="phone number" />
        <button class="w-full bg-primary text-white text-lg font-semibold py-2 rounded-md mt-5" @click="register()">Register</button>
        <p class="text-sm xl:text-md text-gray-400 text-center">
          Have an account? <a @click="this.$router.push('/login')" class="text-black/70 cursor-pointer">Back to login ✨</a>
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
  components: {
    AppLayout,
    Nav,
  },
  data() {
    return {
      lastcard: ["Name", "Id-card", "password", "phone number"],
      name: "",
      idcard: "",
      password: "",
      phone: "",
    };
  },
  methods: {
    // ifelse condition
    async showAlert() {
      // Use sweetalert2
      const Toast = await this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
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
    async register() {
      try {
        if (this.name === "" || this.idcard === "" || this.password === "" || this.phone === "") {
          throw new Error("Please fill in all fields");
        }

        if (this.idcard.length !== 13) {
          throw new Error("id card is not correct");
        }

        if (this.phone.length !== 10) {
          throw new Error("phone number is not correct");
        }

        await axios.post("http://localhost:8080/api/auth/register", {
          name: this.name,
          idCard: this.idcard,
          password: this.password,
          phone: this.phone,
        });

        await this.showAlert();
        await this.$router.push("/login");
      } catch (error) {
        if (error.message === "Please fill in all fields") {
          this.$swal.fire({
            icon: "error",
            text: "โปรดกรอกข้อมูลให้ครบถ้วน",
          });
        } else if (error.message === "id card is not correct") {
          this.$swal.fire({
            icon: "error",
            text: "เลขบัตรประชาชนไม่ครบ 13 หลัก",
          });
        } else if (error.message === "phone number is not correct") {
          this.$swal.fire({
            icon: "error",
            text: "เบอร์โทรศัพท์ไม่ครบ 10 หลัก",
          });
        } else if (error?.response?.data?.status === "errorid") {
          this.$swal.fire({
            icon: "error",
            text: "เลขบัตรประชาชนนี้ถูกใช้งานแล้ว",
          });
        } else if (error?.response?.data?.status === "errorphone") {
          this.$swal.fire({
            icon: "error",
            text: "เบอร์โทรศัพท์นี้ถูกใช้งานแล้ว",
          });
        } else if (error?.response?.data?.message === "Wrong password") {
          this.$swal.fire({
            icon: "error",
            text: "รหัสผ่านผิดพลาด",
          });
        }
      }
    },
  },
};
</script>

<style></style>
