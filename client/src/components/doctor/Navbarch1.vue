<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <nav
    class="bg-[#111727] border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link style="cursor: pointer; text-decoration: none" to="/doctor/">
        <p class="flex items-center">
          <img src="../../assets/Navbar/Logo.png" class="h-6 mr-3 sm:h-9" />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap text-white"
            >W&N</span
          >
        </p>
      </router-link>
      <div class="flex items-center md:order-2">
        <button
          type="button"
          class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="dropdownuser1"
          data-dropdown-placement="bottom"
        >
          <span class="sr-only">Open user menu</span>
          <img
            v-if="image"
            class="w-8 h-8 rounded-full object-cover"
            :src="image"
            alt="user photo"
            @change="
              (event) => {
                uploadFile(event);
              }
            "
          />
          <span v-else class="material-icons-outlined text-white w-8 h-8">
            account_circle
          </span>
        </button>
        <!-- Dropdown menu -->
        <div
          class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
          id="dropdownuser1"
        >
          <div class="px-4 py-3">
            <span class="block text-sm text-gray-900 dark:text-white"
              >wiwat liangkobkit</span
            >
          </div>

          <div>
            <router-link
              style="cursor: pointer; text-decoration: none"
              to="/doctor/info"
            >
              <button
                class="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Account
              </button>
            </router-link>
          </div>
          <ul class="py-2" aria-labelledby="user-menu-button">
            <li>
              <button
                @click="logout()"
                class="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      ></div>
    </div>
  </nav>
</template>

<script>
import {
  ref as storageRef,
  getDownloadURL,
  listAll,
  deleteObject,
  uploadBytes,
} from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
const storage = useFirebaseStorage();
export default {
  data() {
    return {
      image: "",
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
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
  },
};
</script>

<style></style>
