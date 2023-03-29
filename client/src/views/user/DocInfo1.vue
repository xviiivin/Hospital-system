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
                        <div class="w-full h-full p-7">
                              <div class="mt-3">
                                    <p class="text-md text-[#B6B6B6] ml-8">ประวัติคุณหมอ</p>
                                    <div v-for="(val, index) in DocInfo" :key="index">
                                          <p class="text-lg font-bold mb-8 ml-8 underline">{{ val.docname }}</p>
                                          <div class="">
                                                <div class="col-start-2 col-end-7 md:col-start-3">
                                                      <div
                                                            class="rounded-xl w-[250px] h-[250px] group shadow-lg overflow-hidden ">
                                                            <img class=" h-full w-full group-hover:scale-110 ease-in duration-300"
                                                                  :src="val.image">
                                                      </div>
                                                </div>
                                                <div class="col-start-1 col-end-7 mt-5">
                                                      <p class="ml-8 font-bold text-lg">ประวัติ</p>
                                                      <div class=" text-[#111727] ml-[40%]">
                                                            <ul class="list-disc">
                                                                  <li>{{ val.docname }}</li>
                                                                  <li>{{ val.specialist }}</li>
                                                                  <li>{{ val.age }}</li>
                                                                  <li>{{ val.gender }}</li>
                                                                  <li>{{ val.description }}</li>
                                                            </ul>
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
import pic1 from "../../assets/doctorPic1.png";
import pic2 from "../../assets/doctorPic2.png";

export default {
      components: {
            AppLayout,
            Nav,
      },
      data: () => ({
            hosName: "Hallaluya Hospital",
            DocInfo: [
                  {
                        id: "1",
                        docname: "Wiranyupa Petchin",
                        age: "19",
                        gender: "female",
                        specialist: "Otolaryngologist",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing .",
                        image: pic1
                  },


            ],

      }),
};
</script>
      
<style></style>
      