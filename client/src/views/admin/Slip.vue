<template>
  <div class="w-full">
    <adminnav />
    <div class="w-full mx-auto mt-10 flex flex-wrap gap-2 gap-y-12">
      <div v-for="(value, index) in payment" :key="index">
        <div class="text-justify justify-center w-fit" v-if="value.status == 'SUCCESS'">
          <div
            class="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl">
            <div class="px-5 pb-5">
            
              <div class="flex flex-col items-center justify-between">
                <img :src="value.image" class="py-4 w-1/2 h-1/2" />
                <p>Paymentid:<span>{{ value.id }}</span> </p>
              </div>
              <p>Name : {{ value.User.name }}</p>
              <p>Totalprice: {{ value.treatment.totalPrice }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import adminnav from "../../components/admin/Nav.vue";
import { ref as storageRef, getDownloadURL, listAll } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
const storage = useFirebaseStorage();
import axios from "axios";
export default {
  data() {
    return {
      image: [],
      userId: "",
      payment: [],
    };
  },
  components: { adminnav },
  mounted() {
    this.userId = this.$route.params.id;
    this.getFile();
  },
  methods: {
    async getFile() {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/payment/user/${this.userId}`
        );
        this.payment = res.data;
        this.payment.map(async (i) => {
          const starsRef = storageRef(storage, "slips/" + i.id);
          const search = await listAll(starsRef);
          const download = (await getDownloadURL(search.items[0])).toString();
          i.image = download;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style></style>