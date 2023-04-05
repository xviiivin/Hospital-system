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
      <div class="relative h-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white">
        <div class="w-full h-full p-8">
          <div class="mt-3">
            <p class="text-md text-[#918f8f] ml-8">ประวัติคุณหมอ</p>
          </div>
          <div v-for="(val, index) in DocInfo" :key="index">
            <div class="mb-3">
              <p class="text-xl font-bold mb-8 underline underline-offset-4 ml-8">{{ val.docname }}</p>
            </div>
            <div class="mx-5 lg:mx-10 mb-3 flex justify-center">
              <div class="rounded-xl w-2/3 h-[calc(100%+2rem)] group shadow-lg overflow-hidden">
                <img class=" w-full group-hover:scale-110 ease-in duration-300" :src="val.image" />
              </div>
            </div>
            <div class="mt-5">
              <p class="ml-8 mb-3 font-bold text-lg">Record</p>
              <div class="text-[#111727] ml-16">
                <ul class="list-disc break-words font-semibold">
                  <li>
                    Name <span class="font-light text-[#111727] ml-10"> {{ val.docname }} </span>
                  </li>
                  <li>
                    Expert <span class="font-light text-[#111727] ml-5"> {{ val.specialist }} </span>
                  </li>
                  <li>
                    Age <span class="font-light text-[#111727] ml-12">{{ val.age }}</span>
                  </li>
                  <li>
                    Gender <span class="font-light text-[#111727] ml-5">{{ val.gender }}</span>
                  </li>
                  <li>
                    Description <span class="font-light text-[#111727] ml-5"><br /> {{ val.description }}</span>
                  </li>
                </ul>
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
        image: pic1,
      },
    ],
  }),
};
</script>

<style></style>
