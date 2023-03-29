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
                        <div class="w-full h-full p-8 m-5">
                              <div class="mt-3 justify-center">
                                    <div class="w-full " v-for="(val, index) in userInfo" :key="index">
                                          <div class="">
                                                <div class="rounded-xl h-full w-full group drop-shadow-xl overflow-hidden cursor-pointer ">
                                                      <div class="">
                                                            <img class="h-full w-full group-hover:scale-110 ease-in duration-300"
                                                                  :src="val.image">
                                                      </div>
                                                </div>
                                                <div class="text-black font-semibold text-md mt-5 space-y-10 ">
                                                      <span>Name <span class="font-light ml-5">{{ val.name }}</span> </span>
                                                      <br>
                                                      <span>Age <span class="font-light ml-5">{{ val.age }}</span> </span>
                                                      <br>
                                                      <span>Gender <span class="font-light ml-5">{{ val.sex }}</span> </span>
                                                      <br>
                                                      <span>Weight <span class="font-light ml-5">{{ val.weight }}</span>
                                                      </span> <br>
                                                      <span>Height <span class="font-light ml-5">{{ val.height }}</span>
                                                      </span> <br>
                                                      <span>BloodType <span class="font-light ml-5">{{ val.bloodType }}</span>
                                                      </span> <br>
                                                </div>
                                                <div class="space-x-5 mt-10 text-white right-5 bottom-5 absolute">
                                                      <button class="rounded-lg bg-slate-800 p-2 w-18 "> Save </button>
                                                      <button class="rounded-lg p-2 w-18 bg-rose-900 ">Cancel</button>
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
import pic2 from "../../assets/doctorPic1.png";

export default {
      components: {
            AppLayout,
            Nav,
      },
      data: () => ({
            userInfo: [
                  {
                        userId: "1234",
                        name: "wiranyupa petch-in",
                        age: "19",
                        sex: "female",
                        weight: "40",
                        height: "162",
                        bloodType: "b",
                        nationality: "thai",
                        occupation: "student",
                        address: "888/88 chonburi, Thailand",
                        religion: "Buddhist",
                        userImage: "",
                        image: pic2
                  }

            ],

      }),
};
</script>
      
<style></style>
      