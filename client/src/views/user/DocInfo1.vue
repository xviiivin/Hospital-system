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
          <div >
            <div class="mb-3">
              <p class="text-xl font-bold mb-8 underline underline-offset-4 ml-8">{{ doctorInfo?.name }}</p>
            </div>
        
            <div class="mx-5 lg:mx-10 mb-3 flex justify-center">
              <div class="rounded-xl w-2/3 h-[calc(100%+2rem)] group shadow-lg overflow-hidden">
                <img class=" w-full group-hover:scale-110 ease-in duration-300" :src="image" @change="(event) => {
                    uploadFile(event);
                  }
                  " />
              </div>
            </div>
            <div class="mt-5">
              <p class="ml-8 mb-3 font-bold text-lg">Record</p>
              <div class="text-[#111727] ml-16">
                <ul class="list-disc break-words font-semibold">
                  <li>
                    Name <span class="font-light text-[#111727] ml-10"> {{ doctorInfo?.name }} </span>
                  </li>
                  <li>
                    Expert <span class="font-light text-[#111727] ml-5"> {{ doctorInfo?.userInfo?.expert }} </span>
                  </li>
                  <li>
                    Age <span class="font-light text-[#111727] ml-12">{{ doctorInfo?.userInfo?.age }}</span>
                  </li>
                  <li>
                    Gender <span class="font-light text-[#111727] ml-5">{{ doctorInfo?.userInfo?.sex }}</span>
                  </li>
                  <li>
                    Description <span class="font-light text-[#111727] ml-5"> {{ doctorInfo?.userInfo?.description }}</span>
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
import { ref as storageRef, getDownloadURL, listAll, deleteObject, uploadBytes } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
import axios from 'axios';
const storage = useFirebaseStorage();
export default {
  components: {
    AppLayout,
    Nav,
  },
  data: () => ({
    image: '',
    hosName: "Hallaluya Hospital",
    docid: '',
    doctorInfo: {},
    userId: "",
  }),
  created() {
    this.docid = this.$route.params.id;
  },
  mounted() {
    this.getDocinfo();
    // 
    this.getFile();
  },
  methods: {
    async getDocinfo() {
      try {
        // const doctorId = JSON.parse(localStorage.getItem("user")).id;
        const doctor = await axios.get(`http://localhost:8080/api/doctor/${this.docid}`)
        console.log(doctor.data)
        this.doctorInfo = doctor.data;
        console.log(this.doctorInfo)
      }
      catch (err) {
        console.log(err);
      }
    },
    async getFile() {
      try {
        const starsRef = storageRef(storage, "users/" + this.docid);
        const search = await listAll(starsRef);
        const download = (await getDownloadURL(search.items[0])).toString();
        this.image = download;
      } catch (error) {
        console.log(error);
      }
    },
  },
  props: {
    treatment: Object,
  },

};
</script>

<style></style>
