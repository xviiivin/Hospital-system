<template>
  <div class="mb-8">
    <div class="w-full hover:scale-105  transition-all delay-100 ease-in-out duration-300 border-2 rounded-lg mb-2"
      v-for="(value, index) in fakeinfo" :key="index">
      <div class="flex justify-between p-3">
        <div>
          {{ value.data }}
        </div>
        <router-link style="cursor: pointer; text-decoration: none" to="/payment">
          <button class="underline-offset-2">Check out</button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fakeinfo: [
        { data: "12/02/1323" },
       
        
      ],
    };
  },
};
</script>

<style></style>