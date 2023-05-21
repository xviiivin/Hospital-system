<template>
  <AppLayout>
    <Nav />
    <div class="bg-[#111727]">
      <div class="h-24 p-4 container mx-auto">
        <router-link style="cursor: pointer; text-decoration: none" to="/">
          <img
            src="../../assets/back 1@2x.png"
            alt=""
            class="w-8 cursor-pointer"
          />
        </router-link>
      </div>
    </div>
    <div
      class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]"
    >
      <!-- body -->
      <div
        class="relative h-full w-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white"
      >
        <div class="w-full h-full p-7">
          <div class="flex flex-col mb-8">
            <p class="text-lg underline mb-4">Waiting for payment</p>
            <div class="flex flex-col gap-y-2">
              <div
                class="w-full hover:scale-105 transition-all delay-100 ease-in-out duration-300"
                v-for="(value, index) in payment"
                :key="index"
              >
                <div
                  class="flex justify-between p-3 items-center border-2 rounded-lg"
                  v-if="value.status == 'PENDING'"
                >
                  <div class="flex flex-col justify-between gap-y-2 flex-grow">
                    <p>
                      {{ new Date(value.createdAt).toLocaleString("th") }}
                    </p>
                    <p>ราคา {{ value.treatment.totalPrice }} บาท</p>
                  </div>
                  <router-link
                    style="cursor: pointer; text-decoration: none"
                    :to="`/payment/${value.id}`"
                  >
                    <button class="underline-offset-2">Check out</button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-8">
            <p class="text-lg underline mb-4">Paid</p>
            <div class="flex flex-col gap-y-2">
              <div
                class="w-full"
                v-for="(value, index) in payment"
                :key="index"
              >
                <div
                  class="w-full flex justify-between p-3 items-center border-2 rounded-lg"
                  v-if="value.status == 'SUCCESS'"
                >
                  <p>
                    {{ new Date(value.createdAt).toLocaleString("th") }}
                  </p>
                  <p>{{ value.treatment.totalPrice }} บาท</p>
                </div>
              </div>
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
import axios from "axios";

export default {
  components: {
    AppLayout,
    Nav,
  },
  data() {
    return {
      payment: [],
      usreId: JSON.parse(localStorage.getItem("user")).id,
    };
  },
  mounted() {
    this.addstatement();
  },
  methods: {
    async addstatement() {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/payment/user/${this.usreId}`
        );
        console.log(res.data);
        this.payment = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
