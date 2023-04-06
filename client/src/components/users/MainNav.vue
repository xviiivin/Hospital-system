<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <nav class="bg-[#111727] px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <img src="../../assets/Navbar/Logo.png" class="h-6 mr-3 sm:h-9" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">W&N</span>
      </a>
      <div class="flex items-center md:order-2">
      <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300"
        id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdownuser1"
        data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full object-cover" @change="
            (event) => {
              uploadFile(event);
            }
          " :src="image" alt="user photo" />
          <!-- @change="
                    (event) => {
                      uploadFile(event);
                    }
                  " -->
        </button>
        <!-- Dropdown menu -->
        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
          id="dropdownuser1">
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <button
                class="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                @click="logout">
                Sign out
              </button>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="mobile-menu-2" type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul
          class="flex flex-col p-4 mt-4 border text-white border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
          <li>
            <a href="#" class="block py-2 pl-3 pr-6 rounded md:bg-transparent font-bold md:p-0 hover:underline"
              aria-current="page"><router-link style="cursor: pointer; text-decoration: none" to="/"> Home
              </router-link></a>
          </li>
          <li>
            <p
              class="block py-2 pl-3 pr-4 rounded font-bold md:p-0 md:hover:bg-transparent hover:underline ease-linear duration-[10000]">
              <router-link style="cursor: pointer; text-decoration: none" to="/pending"> Payment </router-link>
            </p>
          </li>
          <li>
            <p class="block py-2 pl-3 pr-4 rounded font-bold md:p-0 md:hover:bg-transparent hover:underline">
              <router-link style="cursor: pointer; text-decoration: none" to="/user/info">Account</router-link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref as storageRef, getDownloadURL, listAll, deleteObject, uploadBytes } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
const storage = useFirebaseStorage();
export default {
  data() {
    return {
      image: "",

    }
  },
  computed: {},
  methods: {
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
    async getFile(userId) {
      try {
        const starsRef = storageRef(storage, "users/" + userId);
        const search = await listAll(starsRef);
        const download = (await getDownloadURL(search.items[0])).toString();
        this.image = download;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    if (userId) {
      this.userId = userId;
      this.getFile(this.userId);
    }
  }
};
</script>

<style></style>
