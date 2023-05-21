<template>
  <div>
    <div class="">
      <!-- paymentid -->
      <p class="font-bold text-md xl:text-xl lg:text-xl md:text-lg p-3">Payment - {{ paymentId }}</p>
      <!-- card -->
      <div class="card purple my-8 sm:my-2 w-full">
        <div class="max-w-sm w-full lg:max-w-full">
          <div class="rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
            <div>
              <p class="text-white text-xl font-bold leading-none mb-16">
                Name: {{ userInfo?.name }}
              </p>
            </div>
            <div class="flex items-center">
              <div class="text-sm">
                <p class="text-gray-100 text-lg mb-2">Hospitalid: {{ dataofbirth }}</p>
                <p class="text-gray-100">tel: {{ tel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form action="">
        <!-- bank -->
        <div class="mb-8">
          <label for="slip" class="block mb-2 text-sm font-semibold text-[#6B6868]">Select an bank to pay</label>
          <select id="selectslip" v-model="selectslip"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#212D50] focus:border-[#212D50] block w-full p-2.5">
            <option selected>Choose a bank</option>
            <option v-for="(value, index) in bank" :key="index">
              {{ value }}
            </option>
          </select>
        </div>

        <!-- silp -->
        <div class="mb-8">
          <label class="block mb-2 text-sm font-semibold text-[#6B6868]" for="file_input">Money transfer slip </label>
          <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            id="file_input" ref="fileInput" type="file" @change="addImage" v-on="file_input"/>
        </div>
      </form>

      <div class="flex justify-end mb-36">
        <button class="bg-[#111727] text-white py-4 px-6 rounded-xl" @click="payment()">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref as storageRef, uploadBytes } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
const storage = useFirebaseStorage();
import axios from "axios";
export default {
  data() {
    return {
      selectslip: '',
      file_input: '',
      name: "wiwat liangkobkit",
      paymentid: "#3132313(paymentid)",
      dataofbirth: "18/01/46",
      tel: "086-412-2323",
      bank: {
        "K-bank": "K-bank :057-1-67963-9",
        Promptpay: "Promptpay :086-412-2323",
        "K-bank3": "K-bank3 :1-0112-3123-1235",
      },
      slipImage: "",
      userInfo: {}
    };
  },
  props: {
    paymentId: String,
  },
  methods: {
    async addImage(event) {
      this.slipImage = event.target.files[0];
      console.log(this.slipImage);
    },
    async payment() {
      try {
        const file = this.slipImage;
        const starsRef = storageRef(storage, `slips/${this.paymentId}/${file.name}`);
        await uploadBytes(starsRef, file);

        if (this.selectslip === "" && this.slipImage == '') {
          throw new Error("Please select all input");
        }
        if (this.selectslip === "") {
          throw new Error("Please select a bank");
        }
        if (this.slipImage == '') {
          throw new Error("Please select an image");
        }
        const res = await axios.patch(`http://localhost:8080/api/payment/status/${this.paymentId}`, {
          status: "SUCCESS",
        });
        this.$swal.fire(
          'Your payment successful!',
          'Thank you 😍',
          'success'
        )
        this.$router.push('/pending');


      } catch (error) {
        console.log(error);
        if (error.message === "Please select a bank") {
          this.$swal.fire({
            icon: "error",
            text: "Please select a bank!",
          });
        }

        if (error.message === "Please select an image") {
          this.$swal.fire({
            icon: "error",
            text: "Please select an image!",
          });
        }

        if (error.message === "Please select all input") {
          this.$swal.fire({
            icon: "error",
            text: "Please select all!",
          });
        }

     }
    },
    async getUserInfo() {
      const userId = JSON.parse(localStorage.getItem("user")).idCard;
      const res = await axios.get(`http://localhost:8080/api/user/${userId}`);
      console.log(res.data);
      this.userInfo = res.data;
    }
  }, mounted() {
    this.getUserInfo();
  }
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  padding: 2em;
  border-radius: 25px;
  color: white;
  line-height: 25px;
  box-shadow: 5px 5px 10px #ccc;
  float: left;
}

.card.purple {
  background: linear-gradient(150deg, #111727, #ff5757 150%);
}
</style>
