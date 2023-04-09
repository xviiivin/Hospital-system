<template>
  <AppLayout>
    <Nav />
    <div class="bg-[#111727]">
      <div class="p-4 container mx-auto">
        <router-link style="cursor: pointer; text-decoration: none" to="/">
          <img src="../../assets/back 1@2x.png" alt="" class="w-8 cursor-pointer" />
        </router-link>
      </div>
    </div>
    <div class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]">
      <!-- body -->
      <div class="flex flex-col w-full bg-white flex-grow rounded-t-3xl p-5 items-center">
        <!-- image input -->

        <Image />

        <div class="flex flex-col item-center mb-6">
          <table class="w-full justify-center">
            <tbody class="w-full flex flex-col  xl:mx-auto xl:justify-center gap-y-3">
              <tr class="flex justify-between items-center gap-x-2">
                <td>Name</td>
                <td><input type="text" class="rounded-md py-1" :value="userInfo?.name"
                    @input="userInfo.name = $event.target.value" /></td>
              </tr>
              <tr class="flex justify-between items-center gap-x-2">
                <td>Age</td>
                <td>
                  <input type="number" class="rounded-md py-1" :value="userInfo?.userInfo?.age || ''"
                    @input="userInfo.userInfo.age = $event.target.value" />
                </td>
              </tr>
              <tr class="flex justify-between items-center gap-x-2">
                <td>Gender</td>
                <td>
                  <select :value="userInfo?.userInfo?.sex" @input="
                    (event) => {
                      if (userInfo && userInfo.userInfo) {
                        userInfo.userInfo.sex = event.target.value;
                      }
                    }
                  "
                    class="w-full text-sm text-black bg-white border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black">
                    <option value="" disabled>Choose your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </td>
              </tr>
              <tr class="flex justify-between items-center gap-x-2">
                <td>Weight</td>
                <td>
                  <input type="number" class="rounded-md py-1" @input="userInfo.userInfo.weight = $event.target.value"
                    :value="userInfo?.userInfo?.weight" />
                </td>
              </tr>
              <tr class="flex justify-between items-center gap-x-2">
                <td>Height</td>
                <td>
                  <input type="number" class="rounded-md py-1" @input="userInfo.userInfo.height = $event.target.value"
                    :value="userInfo?.userInfo?.height" />
                </td>
              </tr>
              <tr class="flex justify-between items-center gap-x-2">
                <td>Blood type</td>
                <td>
                  <input type="text" class="rounded-md py-1" @input="userInfo.userInfo.bloodType = $event.target.value"
                    :value="userInfo?.userInfo?.bloodType" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- button group -->
        <div class="w-full flex flex-col xl:w-1/3 xl:mx-auto xl:justify-center">
          <div class="space-x-5 text-white flex justify-end">
            <button @click="saveUserInfo()" class="rounded-lg bg-slate-900 p-2 px-5">Save</button>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "../../components/AppLayout.vue";
import Nav from "../../components/users/MainNav.vue";
import Image from "../../components/AddImage.vue";
import axios from "axios";
export default {
  components: {
    AppLayout,
    Nav,
    Image,
  },
  data: () => ({
    left: ["Name", "Age", "Genders", "Weight", "Height"],
    userInfo: {},
  }),
  mounted() {
    this.getUserInfo();
  },
  methods: {
    async getUserInfo() {
      const userId = JSON.parse(localStorage.getItem("user")).idCard;
      const res = await axios.get(`http://localhost:8080/api/user/${userId}`);
      console.log(res.data);
      this.userInfo = res.data;
    },
    async saveUserInfo() {
      try {
        const usrId = JSON.parse(localStorage.getItem("user")).idCard;
        if (this.userInfo.userInfo.age) {
          this.userInfo.userInfo.age = parseInt(this.userInfo.userInfo.age);
        }
        if (this.userInfo.userInfo.weight) {
          this.userInfo.userInfo.weight = parseFloat(this.userInfo.userInfo.weight);
        }
        if (this.userInfo.userInfo.height) {
          this.userInfo.userInfo.height = parseFloat(this.userInfo.userInfo.height);
        }
        await axios.patch(`http://localhost:8080/api/user/${usrId}/info`, this.userInfo.userInfo);
        delete this.userInfo.userInfo;
        await axios.patch(`http://localhost:8080/api/user/${usrId}`, this.userInfo);
        this.getUserInfo();
        this.$swal.fire("You info has been saved!", "You clicked the button!", "success");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
