import axios from 'axios';
<template>
  <div class="absolute mx-w-5xl top-[0px] w-full h-screen flex items-center justify-center backdrop-blur-sm backdrop-brightness-50 z-10" v-if="open">
    <div class="w-[500px] h-[360px] bg-white">
      <div class="px-[30px] pt-[30px]">
        <p class="font-semibold text-2xl">Add Account</p>
        <p class="border-white hr2"></p>
        <div class="mt-[20px] space-y-3">
          <label class="font-light">Name</label>
          <input type="text" class="h-[37px] border-[1px] border-black rounded-xl p-2.5 w-[100%]" v-model="name" />
        </div>
        <div class="mt-[20px] space-y-3">
          <label class="font-light">Identification Number</label>
          <input type="text" class="h-[37px] border-[1px] border-black rounded-xl p-2.5 w-[100%]" v-model="idCard" />
        </div>
        <div class="flex ml-[52%] mt-[30px] space-x-3">
          <button
            class="bg-black rounded-2xl border-[1px] border-black px-7 py-1.5 text-white font-light"
            @click="
              show = !show;
              addRole();
            "
          >
            ยืนยัน
          </button>
          <button class="rounded-2xl border-[1px] border-black px-7 py-1.5 font-light" @click="setOpen(false)">ยกเลิก</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      name: "",
      idCard: "",
    };
  },
  props: {
    open: Boolean,
    setOpen: Function,
    getDoctor: Function,
  },
  methods: {
    async addRole() {
      try {
        if (this.name === "" || this.idCard === "") {
          throw new Error("กรุกรอกข้อมูลให้ครบถ้วน");
        }
        await axios.patch(`http://localhost:8080/api/user/role/${this.idCard}`, {
          role: "DOCTOR",
        });
        this.getDoctor();
        this.setOpen(false);
        this.$swal.fire("Add role done!", "You clicked the button!", "success");
      } catch (error) {
        this.$swal.fire("Error!", error.message, "error");
      }
    },
  },
};
</script>
<style lang=""></style>
