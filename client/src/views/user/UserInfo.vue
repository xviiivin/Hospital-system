<template>
  <AppLayout>
    <Nav />
    <div class="bg-[#111727]">
      <div class="h-24 p-4 container mx-auto">
        <router-link style="cursor: pointer; text-decoration: none" to="/">
          <img src="../../assets/back 1@2x.png" alt="" class="w-8 cursor-pointer" />
        </router-link>
      </div>
    </div>
    <div class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]">
      <!-- body -->
      <div class="flex flex-col w-full bg-white flex-grow rounded-t-3xl p-5">
        <!-- image input -->
        <div class="mb-6">
          <Image />
        </div>
        <div class="flex flex-col item-center mb-6">
          <table class="w-full justify-center">
            <tbody class="w-full flex flex-col xl:w-1/3 xl:mx-auto xl:justify-center gap-y-3">
              <tr class="flex justify-between items-center">
                <td>Name</td>
                <td><input type="text" class="rounded-md py-1"></td>
              </tr>
              <tr class="flex justify-between items-center">
                <td>Age</td>
                <td><input type="number" class="rounded-md py-1"></td>
              </tr>
              <tr class="flex justify-between items-center">
                <td>Gender</td>
                <td><select
                    class="w-full text-sm text-black bg-white border-0 border-b-2 focus:outline-none focus:ring-0 focus:border-black">
                    <option value="" disabled>Choose your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select></td>
              </tr>
              <tr class="flex justify-between items-center">
                <td>Weight</td>
                <td><input type="number" class="rounded-md py-1"></td>
              </tr>
              <tr class="flex justify-between items-center">
                <td>Height</td>
                <td><input type="number" class="rounded-md py-1"></td>
              </tr>
              <tr class="flex justify-between items-center">
                <td>Blood type</td>
                <td><input type="text" class="rounded-md py-1"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- button group -->
        <div class="w-full flex flex-col xl:w-1/3 xl:mx-auto xl:justify-center">
          <div class="space-x-5 text-white flex justify-end ">
            <button class="rounded-lg p-2 bg-rose-500">Cancel</button>
            <button class="rounded-lg bg-slate-900 p-2 px-5">Save</button>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<!-- <div class="space-x-5 text-white flex justify-end">
  <button class="rounded-lg bg-slate-800 p-2 px-5">Save</button>
  <button class="rounded-lg p-2 bg-rose-900">Cancel</button>
</div>
       -->
<script>
import AppLayout from "../../components/AppLayout.vue";
import Nav from "../../components/users/MainNav.vue";
import Image from "../../components/AddImage.vue"
export default {
  components: {
    AppLayout,
    Nav,
    Image
  },
  data: () => ({
    left: ["Name", "Age", "Genders", "Weight", "Height"]
  }),
  methods:{
    saveelement(){

    },
  }
};
</script>
      
<style></style>
      