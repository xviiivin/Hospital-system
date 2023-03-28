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
                        <div class="w-full h-full p-3">
                              <div class="mt-3">
                                    <p class="text-2xl font-extrabold m-8 text-[#111727]">Hospital records</p>

                                    <div class="grid grid-cols-8 mb-8 " v-for="(val, index) in hosRecord" :key="index">
                                          <div
                                                class="col-start-1 col-end-7 ml-5 lg:col-start-2 lg:ml-0 md:col-start-2 md:ml-0 cursor-pointer">
                                                <div
                                                      class="rounded-xl w-[325px] h-[150px] bg-white group drop-shadow-xl overflow-hidden  ">
                                                      <div class="h-full w-full">
                                                            <img class="h-full w-full group-hover:scale-110 ease-in duration-300"
                                                                  :src="val.image">
                                                      </div>
                                                      <div
                                                            class="bg-black opacity-[65%] h-full absolute w-full bottom-0 group-hover:bg-black group-hover:opacity-[30%] ease-out duration-300">
                                                            <div class="bottom-3 absolute ml-5 ">
                                                                  <p class="text-md text-bold text-white" >{{ val.hosName }} 
                                                                  </p>
                                                            </div>
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
import pic2 from "../../assets/hos2.png";

export default {
      components: {
            AppLayout,
            Nav,
      },
      data: () => ({
            hosRecord: [
                  {
                        id: "1",
                        hosName: "Hallaluya Hospital",
                        image: pic2
                  },

                  {
                        id: "2",
                        hosName: "Hallaluya Hospital",
                        image: pic2

                  },

                  {
                        id: "3",
                        hosName: "Hallaluya Hospital",
                        image: pic2
                  },

            ],

      }),
};
</script>
      
<style></style>
      