<template>
  <div class="w-full mx-auto">
    <DocNav1 />

    <div class="grid grid-cols-12 mt-24">
      <div class="col-start-2 col-end-6">
        <p class="font-bold text-center mb-6">You can add your picture image here!</p>
        <div class="text-center">
          <Image />
        </div>
      </div>

      <div class="col-start-6 col-end-12 bg-[#E6E6E6] w-full h-auto px-10 py-5 mb-12">
        <div class="grid grid-cols-2 gap-10">
          <div class="">
            <div v-for="(value, index) in left" :key="index" class="pb-8 text-lg font-bold">
              {{ value }}
            </div>
          </div>
          <div>
            <div class="pb-4">
              <input class="w-full" type="text" @input="doctorInfo.name = $event.target.value"
                :value="doctorInfo?.name || ''" />
            </div>
            <div class="pb-4">
              <input class="w-full" type="number" :value="doctorInfo?.userInfo?.age"
                @input="doctorInfo.userInfo.age = $event.target.value" />
            </div>
            <div class="pb-4">
              <select id="underline_select" :value="doctorInfo?.userInfo?.sex" @input="
                (event) => {
                  if (doctorInfo && doctorInfo.userInfo) {
                    doctorInfo.userInfo.sex = event.target.value;
                  }
                }
              "
                class="py-2.5 px-2 w-full text-sm text-black bg-white border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black">
                <option value="" disabled>Choose your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div class="pb-4">
              <select id="underline_select" :value="doctorInfo?.hospitalId" @input="
                (event) => {
                  doctorInfo.hospitalId = event.target.value;
                }
              "
                class="py-2.5 px-2 w-full text-sm text-black bg-white border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black">
                <option value="" disabled>Choose your hospital</option>
                <option v-for="(value, index) in hospital" :key="index" :value="value.id">{{ value.name }}</option>

              </select>
            </div>

            <div class="pb-4">
              <input class="w-full" type="text" @input="doctorInfo.userInfo.expert = $event.target.value"
                :value="doctorInfo?.userInfo?.expert || ''" />
            </div>
            <div>
              <textarea name="" class="w-full" id="" cols="30" rows="3" @input="
                (event) => {
                  doctorInfo.userInfo.description = event.target.value;
                }
              " :value="doctorInfo?.userInfo?.description || ''"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="col-start-11 col-end-13">
        <button @click="saveDoctorInfo()" class="bg-[#111727] border-2 boder-black text-white p-4 rounded-lg">Save
          All</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppLayout from "../../components/AppLayout.vue";
import Image from "../../components/AddImage.vue";
import DocNav1 from "../../components/doctor/Navbarch1.vue";
import axios from "axios";
export default {
  components: {
    AppLayout,
    DocNav1,
    Image,
  },
  data() {
    return {
      isActive: true,
      doctorInfo: {},
      userId: "",
      left: ["Name", "Age", "Genders", "Hospital", "Expert", "Discription"],
      hospital: [],
    };
  },
  mounted() {
    this.getDotorInfo();
    this.getHospital();
  },
  methods: {
    async getDotorInfo() {
      const doctorId = JSON.parse(localStorage.getItem("user")).id;
      const doctor = await axios.get(`http://localhost:8080/api/doctor/${doctorId}`);
      console.log(doctor.data)
      this.doctorInfo = doctor.data;
    },
    async saveDoctorInfo() {
      try {
        const doctorId = JSON.parse(localStorage.getItem("user")).idCard;
        if (this.doctorInfo.userInfo?.age) {
          this.doctorInfo.userInfo.age = parseInt(this.doctorInfo.userInfo.age);
        }
        console.log(this.doctorInfo.hospitalId)
        await axios.patch(`http://localhost:8080/api/user/${doctorId}/info`, this.doctorInfo.userInfo);
        delete this.doctorInfo.userInfo;
        await axios.patch(`http://localhost:8080/api/user/${doctorId}`, this.doctorInfo);
        this.getDotorInfo();
        this.$swal.fire("You info has been saved!", "You clicked the button!", "success");
      } catch (error) {
        console.log(error);
      }
    },
    async getHospital() {
      try {
        const hospital = await axios.get(`http://localhost:8080/api/hospital`);
        this.hospital = hospital.data
      }
      catch (error) {
        console.log(error)
      }
    }
  },
};
</script>

<style></style>
