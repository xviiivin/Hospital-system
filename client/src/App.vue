<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
})
</script>



<template>
  <transition name="moveInUp">
    <router-view></router-view>
  </transition>
</template>
<!--  background-image: url('https://sv1.picz.in.th/images/2023/03/01/eBeenR.jpg'); -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

* {
  font-family: 'Space Mono', monospace;
}

body {
  scroll-behavior: smooth;
}

.moveInUp-enter-active {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>