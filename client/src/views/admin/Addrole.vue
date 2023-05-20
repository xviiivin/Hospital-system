<template>
  <div class="w-full">
    <adminnav />
    <card :open="open" :setOpen="setOpen" :getDoctor="getDoctor" />
    <div class="w-full px-20 flex flex-col items-center border">
      <div class="w-full mt-16 flex items-center justify-between border-black border-b border-t mx-10">
        <p class="text-2xl text-bold my-10">Add Role</p>
        <button class="flex rounded-lg text-lg bg-black text-white px-4 py-2" @click="setOpen(true)">Add doctor</button>
      </div>
      <div class="w-full mx-auto mt-10 flex flex-wrap gap-2 gap-y-12">
        <div v-for="(value, index) in doctors" :key="index">
          <div class="text-justify justify-center w-fit">
            <div
              class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl">
              <div class="px-5 pb-5">
                <h5 class="text-2xl py-3 underline font-semibold tracking-tight text-gray-900">{{ value.name }}</h5>
                <span class="text-lg font-bold text-gray-900">Id: {{ value.idCard }}</span>

                <div class="flex items-center justify-between">
                  <span class="text-sm font-bold text-gray-900">หมอทั่วไป</span>
                  <img src="../../assets/bin.png" class="py-4" @click="removeRole(value.idCard)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import adminnav from "../../components/admin/Nav.vue";
import card from "../../components/admin/Card.vue";
import axios from "axios";
export default {
  components: {
    adminnav,
    card,
  },
  data: () => ({
    open: false,
    doctors: [],
  }),

  mounted() {
    this.getDoctor();
  },

  methods: {
    async getDoctor() {
      try {
        const res = await axios.get("http://localhost:8080/api/user/role/doctor");
        this.doctors = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    async removeRole(doctorId) {
      try {
        this.$swal
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          })
          .then((result) => {
            if (result.isConfirmed) {
              axios.patch(`http://localhost:8080/api/user/role/${doctorId}`, {
                role: "USER",
              });
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              this.getDoctor();
            
            }
          });
      } catch (error) {
        console.log(error)
      }
    },
    setDoctors(doctors) {
      this.doctors = doctors;
    },
    setOpen(boolean) {
      this.open = boolean;
    },
  },
};
</script>

<style scoped>
hr {
  border-top: 2px solid black;
  margin-top: 6px;
  margin-left: 100px;
  margin-right: 100px;
}

.hr2 {
  border-top: 2px solid #f3efe7;
  margin-top: 6px;
  background-position: left bottom;
}
</style>
