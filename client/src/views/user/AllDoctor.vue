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
                  <div class="relative h-full w-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white overflow-hidden">
                        <div class="w-full h-full p-8 mx-2 md:mx-8 ">
                        <p class="text-xl font-bold mb-8">{{ hosName }}</p>
                              
                         <div class="mt-3 flex justify-between" v-for="(val, index) in DocInfo" :key="index">
                        
                                          <div class="rounded-xl w-[180px] h-[calc(100%+2rem)] mr-5 group shadow-lg overflow-hidden cursor-pointer">
                                                <img class="h-full w-full group-hover:scale-110 ease-in duration-300"
                                                            :src="val.image">
                                          </div>
                                                
                                          <div class="justify-items-end self-center cursor-pointer">
                                                <p class="text-sm font-bold md:text-md lg:text-md">{{ val.docname }}</p>
                                                <p class="text-[#B6B6B6] text-xs mt-2">{{ val.specialist }}</p>
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
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quibusdam minus! Neque cupiditate similique quas nemo recusandae praesentium vero repudiandae.",
                        image: pic1
                  },

                  {
                        id: "2",
                        docname: "Wiwat shinchang",
                        age: "20",
                        gender: "male",
                        specialist: "Immunologists",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quibusdam minus! Neque cupiditate similique quas nemo recusandae praesentium vero repudiandae.",
                        image: pic2
                  },

                  {

                        id: "3",
                        docname: "Mirumi tempest",
                        age: "30",
                        gender: "male",
                        specialist: "Dermatologists",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quibusdam minus! Neque cupiditate similique quas nemo recusandae praesentium vero repudiandae.",
                        image: pic1
                  },


                  {

                        id: "4",
                        docname: "Mirumi tempest",
                        age: "30",
                        gender: "male",
                        specialist: "Dermatologists",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quibusdam minus! Neque cupiditate similique quas nemo recusandae praesentium vero repudiandae.",
                        image: pic1
                  },


            ],

      }),
};
</script>
      
<style></style>
      