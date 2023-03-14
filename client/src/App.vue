<template>
  <transition name="moveInUp">
    <router-view></router-view>
  </transition>
</template>

<style>
body {
  background-image: url('https://sv1.picz.in.th/images/2023/03/01/eBeenR.jpg');
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