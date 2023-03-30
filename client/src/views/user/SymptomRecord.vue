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
                                    <p class="text-2xl font-extrabold my-8 text-[#111727]">Hospital records</p>
                                    <div class="w-full mb-5 cursor-pointer" v-for="(val, index) in symptomRecord" :key="index">
                                                <div
                                                      class="rounded-xl group drop-shadow-xl overflow-hidden w-full h-full">
                                                      <div class="p-3">
                                                            <!-- <img class="h-full w-full group-hover:scale-110 ease-in duration-300 group-hover:opacity-[80%]"
                                                                  :src="val.image"> -->
                                                                  <p>อาการ</p>
                                                                  <p class="font-light text-sm ">{{val.symptom}}</p>
                                                      </div>
                                                      <div
                                                            class="bg-black opacity-[65%] h-full absolute w-full bottom-0 group-hover:bg-black group-hover:opacity-[30%] ease-out duration-300">
                                                      </div>
                                                      <div class="bottom-3 absolute ml-5">
                                                            <p class="text-md text-bold text-white group-hover:text-white font-semibold">{{
                                                                  val.hosName }}
                                                            </p>
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
            symptomRecord: [
                  {
                        date: "22/02/2566",
                        hosName: "Hallaluya Hospital",
                        symptom: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique id dolores blanditiis doloribus excepturi dolorum, voluptates cupiditate illum sit soluta ipsum, qui autem! Minima deserunt illo quia nostrum veniam velit!"

                        
                  },

                  {
                        date: "10/04/2566",
                        hosName: "Hallaluya Hospital",
                        symptom: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique id dolores blanditiis doloribus excepturi dolorum, voluptates cupiditate illum sit soluta ipsum, qui autem! Minima deserunt illo quia nostrum veniam velit!"

                        

                  },

                  {
                        date: "30/05/2566",
                        hosName: "Hallaluya Hospital",
                        symptom: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique id dolores blanditiis doloribus excepturi dolorum, voluptates cupiditate illum sit soluta ipsum, qui autem! Minima deserunt illo quia nostrum veniam velit!"

                        
                  },

                  

            ],

      }),
};
</script>
      
<style></style>
      