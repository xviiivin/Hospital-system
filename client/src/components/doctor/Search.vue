<template>
  <div class="h-full w-full flex flex-col justify-center items-center">
    <!-- search -->
    <div class="flex flex-col items-center">
      <div class="text-center text-2xl mt-4 font-bold uppercase tracking-wide">
        Search patient by idcard
      </div>
      <div class="flex justify-center mt-5">
        <div
          class="flex text-gray-600 rounded-full border-2 border-gray-200 w-fit transition-all duration-500 items-center px-2"
        >
          <input
            name="serch"
            v-model="input"
            class="bg-white h-30 p-5 pr-10 rounded-full text-sm text-[1.4em] outline-none flex w-[300px] transition-all duration-700 focus:w-[600px]"
          />
          <button
            @click="filteredUsefrs()"
            type="submit"
            class="bg-black py-2 rounded-full text-white px-5"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div
      class="flex mt-10 p-5 container gap-x-5 transition-all border"
      v-if="filteredUsers"
    >
      <div class="w-1/3 h-full flex flex-col gap-y-4 px-10">
        <!-- get image -->
        <div class="w-full flex justify-center mb-10">
          <div class="w-[150px] h-[150px]">
            <img
              v-if="!roading"
              class="w-full h-full block object-cover object-center rounded-lg"
              :src="image"
              alt=""
            />
            <div v-else class="flex justify-center items-center py-20">
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center">
          <p class="text-lg font-bold">Name</p>
          <input
            type="text"
            disabled
            :value="filteredUsers?.name"
            class="p-2 w-1/2 text-black rounded-md"
          />
        </div>

        <div class="flex justify-between items-center">
          <p class="text-lg font-bold">Age</p>
          <input
            type="number"
            disabled
            :value="filteredUsers?.userInfo?.age"
            class="p-2 w-1/2 text-black rounded-md"
          />
        </div>

        <div class="flex justify-between items-center">
          <p class="text-lg font-bold">Gender</p>
          <input
            type="text"
            disabled
            :value="filteredUsers?.userInfo?.sex"
            class="p-2 w-1/2 text-black rounded-md"
          />
        </div>
        <div class="flex justify-between items-center">
          <p class="text-lg font-bold">Weight</p>
          <div
            class="flex w-1/2 items-center rounded-md border p-2 border-black"
          >
            <input
              type="number"
              class="flex-grow w-1/2 focus:border-none focus:ring-0 focus:outline-none border-none"
              :value="filteredUsers?.userInfo?.weight"
            />
            <p class="ml-2 text-[#9a9bad]">KG</p>
          </div>
        </div>

        <div class="flex justify-between items-center">
          <p class="text-lg font-bold">Height</p>
          <div
            class="flex w-1/2 items-center rounded-md border p-2 border-black"
          >
            <input
              type="number"
              class="flex-grow w-1/2 focus:border-none focus:ring-0 focus:outline-none border-none"
              :value="filteredUsers?.userInfo?.height"
            />
            <p class="ml-2 text-[#9a9bad]">CM</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col w-2/3">
        <!-- top -->
        <div class="bg-gray-300 rounded-md w-full">
          <div class="flex flex-col items-start gap-y-2 p-6">
            <p class="px-2 xl:text-xl md:text-lg text-sm font-bold">Symptom:</p>
            <textarea
              v-model="symptom"
              name=""
              id=""
              cols="90"
              rows="1"
              class="w-full border-1 border-black rounded-xl h-72 text-lg p-4 focus:ring-black focus:border-black"
              placeholder="Patient symptom"
            ></textarea>
          </div>
        </div>

        <!-- bottom -->

        <div class="bg-gray-300 rounded-md w-full h-auto p-4 px-5 mt-5">
          <div class="w-full flex gap-x-5 items-center justify-between">
            <p class="text-lg font-bold">Add medicine:</p>

            <select class="w-full" name="" id="" v-model="medicineId">
              <option value="">Select medicine</option>
              <option v-for="(i, index) in medicine" :key="index" :value="i.id">
                {{ i.name }}
              </option>
            </select>

            <input
              type="number"
              class="border border-black focus:ring-black focus:border-black"
              v-model="amount"
              placeholder="amount"
            />
            <button @click="addPill" class="bg-black text-white p-2">
              Add pills
            </button>
          </div>
          <div
            class="w-full mt-5 flex flex-col gap-y-2"
            v-for="(i, index) in medicineSelect"
            :key="index"
          >
            <div class="flex justify-between items-center">
              <p class="text-lg font-bold">{{ i.medicineName }}</p>
              <div class="flex items-center p-2">
                <p>{{ i.amount }} x {{ i.preCal }} = {{ i.price }} baht</p>
                <!-- <button class="border border-red-500 text-red-500" @click="removemedicine(i.medicineId)">Remove</button> -->
              </div>
            </div>
            <div class="" v-if="medicineSelect.lenght !== 0"></div>
          </div>
        </div>

        <!-- button -->
        <div class="flex justify-end py-6">
          <button
            @click="saveTreatment"
            class="bg-[#111727] border-2 boder-black text-white p-4 rounded-lg"
          >
            Save All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref as storageRef, getDownloadURL, listAll } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
import axios from "axios";
const storage = useFirebaseStorage();
export default {
  data() {
    return {
      filteredUsers: false,
      allData: [],
      input: "",
      image: "",
      roading: false,
      medicine: [],
      medicineId: "",
      medicineSelect: [],
      amount: 0,
      symptom: "",
      doctorId: JSON.parse(localStorage.getItem("user")).id,
      token: localStorage.getItem("token"),
    };
  },
  mounted() {
    this.getMedicine();
  },
  methods: {
    async addPill() {
      try {
        if (this.medicineId === "" || this.amount === "") {
          throw new Error("Please fill in all fields");
        }

        if (this.amount == "0") {
          throw new Error("the amount must not be 0");
        }
        const data = {
          medicineId: this.medicineId,
          medicineName: this.medicine.find((i) => i.id === this.medicineId)
            .name,
          preCal: this.medicine.find((i) => i.id === this.medicineId).price,
          amount: this.amount,
          price:
            this.medicine.find((i) => i.id === this.medicineId).price *
            this.amount,
        };
        this.medicineSelect.push(data);
        console.table(this.medicineSelect);
      } catch (error) {
        console.log(error);
        if (error.message === "Please fill in all fields") {
          this.$swal.fire({
            icon: "error",
            text: "Please fill in all fields!",
          });
        }

        if (error.message === "the amount must not be 0") {
          this.$swal.fire({
            icon: "error",
            text: "the amount must more than 0!",
          });
        }
      }
    },

    async saveTreatment() {
      try {
        const data = {
          userId: this.filteredUsers.id,
          description: this.symptom,
          totalPrice: this.medicineSelect.reduce((a, b) => a + b.price, 0),
          doctorId: this.doctorId,
        };

        const treatment = await axios.post(
          "http://localhost:8080/api/treatment",
          data,
          {
            headers: {
              authorization: `Bearer ${this.token}`,
            },
          }
        );
        //   add medicine
        this.medicineSelect.map(async (i) => {
          const data = {
            treatmentId: treatment.data.id,
            medicineId: i.medicineId,
            amount: i.amount,
          };
          await axios.post(
            "http://localhost:8080/api/treatment/medicine",
            data,
            {
              headers: {
                authorization: `Bearer ${this.token}`,
              },
            }
          );
        });

        await this.$swal.fire({
          icon: "success",
          title: "Add medicine done",
          text: "Done",
        });

        console.log(treatment.data.id);
        await axios.post("http://localhost:8080/api/payment", {
          treatmentId: treatment.data.id,
          userId: this.filteredUsers.id,
        });
        //   alert success
      } catch (error) {
        console.log(error);
      }
    },
    async getMedicine() {
      const medicine = await axios.get("http://localhost:8080/api/medicine", {
        headers: {
          authorization: `Bearer ${this.token}`,
        },
      });
      this.medicine = medicine.data;
      console.log(this.medicine);
    },
    async filteredUsefrs() {
      const pateint = await axios.get(
        `http://localhost:8080/api/user/${this.input.toLowerCase()}`,
        {
          headers: {
            authorization: `Bearer ${this.token}`,
          },
        }
      );
      if (pateint.data.role === "DOCTOR" || pateint.data.role === "ADMIN") {
        this.filteredUsers = false;
        this.$swal.fire({
          icon: "error",
          title: "that id card isn't patient",
          text: "plase try again",
        });
      } else {
        this.getFile(pateint.data.id);
        console.table(pateint.data.userInfo);
        this.filteredUsers = pateint.data;
      }
      console.log(this.filteredUsers);
    },
    async getFile(userId) {
      try {
        this.roading = true;
        const starsRef = storageRef(storage, "users/" + userId);
        const search = await listAll(starsRef);
        const download = (await getDownloadURL(search.items[0])).toString();
        this.image = download;
        this.roading = false;
        console.log(download);
      } catch (error) {
        console.log(error);
      }
    },

    // async removemedicine(medicineId) {
    //   try {
    //     this.$swal
    //       .fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //       })
    //       .then((result) => {
    //         if (result.isConfirmed) {
    //           axios.delete(`http://localhost:8080/api/medicine/${medicineId}`, {
    //             role: "DOCTOR",
    //           });
    //           this.getDoctor();
    //           Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //         }
    //       });
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
  },
  computed: {},
};
</script>

<style></style>
