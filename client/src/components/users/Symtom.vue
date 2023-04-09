<template>
  <div class="container mx-auto mt-5">
    <div>
      <div>
        <h1 class="text-2xl font-extrabold my-8 text-[#111727]">Hospital records</h1>
      </div>
      <div class="flex">
        <h2 class="text-xl mr-2 text-[#B6B6B6]">{{ new Date(treatment?.createdAt).toLocaleDateString("TH") }}</h2>
        <router-link style="cursor: pointer; text-decoration: none" to="/user/doctor">
          <a class="text-xl text-black font-medium underline">{{ treatment?.doctor?.name }}</a></router-link
        >
      </div>
    </div>

    <div class="mt-10">
      <div class="block w-full p-8 bg-[#FBFBFF] border border-black rounded-lg shadow">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#202C4B]">Symtom</h5>
        <p class="font-normal text-[#202C4B]">
          {{ treatment?.description }}
        </p>
      </div>
    </div>
    <div>
      <div class="relative overflow-x-auto pt-12 rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 rounded-lg">
          <thead class="text-sm text-gray-700 uppercase bg-[#DEDEDE]">
            <tr>
              <th scope="col" class="px-6 py-3 text-center">Medicine name</th>

              <th scope="col" class="px-6 py-3 text-center">Quantity</th>
              <th scope="col" class="px-6 py-3 text-center">Take a day</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b" v-for="(value, index) in treatment?.medicine" :key="index">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center">
                {{ value.name }}
              </th>
              <td class="px-6 py-4 text-center">
                {{ value.amount }}
              </td>
              <td class="px-6 py-4 text-center">
                {{ value.price * value.amount }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    treatment: Object,
  },
};
</script>
<style></style>
