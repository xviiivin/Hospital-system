<template>
  <AppLayout>
    <Nav />
    <div class="bg-[#111727]">

        <div class="h-24 p-4  container mx-auto ">
            <router-link style="cursor: pointer; text-decoration: none"
              to="/">
              <img src="../../assets/back 1@2x.png" alt="" class="w-8 cursor-pointer">
            </router-link>
           
          </div>
    </div>
    <div class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]">
      <!-- top -->
      
      <!-- body -->
      <div class="relative h-full w-full md:w-2/3  xl:w-1/3 flex items-center rounded-t-3xl bg-white">
        <div class="w-full h-full p-7">

            <div class="h-2/5">
                <p class="text-lg">Waiting for payment</p>
                <nextpayment />
            </div>
            
            <div class="h-3/5">
                <p class="text-lg">Paid</p>
            </div>
        </div>
        <!-- <div class="w-fit flex flex-col items-center">
          <p class="text-center text-4xl">Register</p>
          <div
            class="bg-gradient-to-r w-full from-[#111727] to-[#FF5757] h-1 rounded-full mt-2"
          ></div>
        </div>
        <div class="flex flex-col w-2/3 xl:w-1/3 mt-10 gap-y-5">
          <input
            type="text"
            class="border border-black rounded-full p-2 px-4 text-lg"
            placeholder="Name"
          />
          <input
            type="text"
            class="border border-black rounded-full p-2 px-4 text-lg"
            placeholder="Id-card"
          />
          <input
            type="text"
            class="border border-black rounded-full p-2 px-4 text-lg"
            placeholder="password"
          />
          <input
            type="number"
            class="border border-black rounded-full p-2 px-4 text-lg"
            placeholder="phone number"
          />

          <button
            class="w-full bg-primary text-white text-lg font-semibold py-2 rounded-md mt-10"
          >
            Register
          </button>
        </div>-->
       </div>
    </div>
  </AppLayout>
</template>
  
<script>
import AppLayout from "../../components/AppLayout.vue";
import Nav from "../../components/users/MainNav.vue";
import nextpayment from "../../components/users/Gopayment.vue"
export default {
  components: {
    AppLayout,
    Nav,nextpayment
  },
};
</script>
  
<style></style>
  