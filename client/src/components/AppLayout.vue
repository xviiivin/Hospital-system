<template>
  <main class="w-screen min-h-screen flex flex-col">
    <div
      :class="`${$route.path === '/login' || $route.path === 'register' ? 'h-screen' : ''} w-screen flex justify-between flex-col overflow-x-hidden`">
      <slot class="h-screen" />
      <footer class="bg-primary text-white text-center py-0.5 w-full">tel: 086-412-2323</footer>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
