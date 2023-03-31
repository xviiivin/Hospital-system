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
                  <div class="relative h-full w-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white">
                        <div class="w-full h-full px-8">
                              <div class="mt-5">
                                    <p class="text-2xl font-extrabold my-8 text-[#111727]">{{hosName}}</p>
                                    <div class="w-full mb-6 cursor-pointer " v-for="(val, index) in symptomRecord" :key="index">                                          <div class="">
                                                <p class="mb-2">{{ val.date }}</p>
                                                <div class="group w-full rounded-xl bg-[#111727] group-hover:bg-black ease-out duration-300 overflow-hidden">
                                                      <div class="rounded-xl bg-[#FBFBFF] w-full h-1/3 top-0 border border-[#000000] border-opacity-[33%]">
                                                            <div class="p-3 ml-3 text-[#202C4B]">
                                                                  <p class="font-semibold text-lg mb-3">Symptom</p>
                                                                  <p class="font-extralight text-sm">{{val.symptom}}</p>
                                                            </div>
                                                      </div>
                                                      <div class="mx-5  ml-0 w-full h-full p-3">
                                                            <p class="text-md text-bold text-white font-semibold text-center">details </p>
                                                      </div>
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

export default {
      components: {
            AppLayout,
            Nav,
      },
      data: () => ({
            hosName: 'Hallaluya Hospital',
            symptomRecord: [
                  {
                        date: "22/02/2566",
                        symptom: " Lorem ipsum dolor sit amet consectetur,  Similique id dolores blanditiis, voluptates cupiditate illum sit soluta ipsum, qui autem! Minima deserunt illo quia nostrum veniam velit!"

                        
                  },

                  {
                        date: "10/04/2566",
                        symptom: " Lorem ipsum dolor sit amet consectetur,  Similique id dolores blanditiis, voluptates cupiditate illum sit soluta ipsum, qui autem! Minima deserunt illo quia nostrum veniam velit!"

                        

                  },


                  

            ],

      }),
};
</script>
      
<style></style>
      