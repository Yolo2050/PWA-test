<script setup>
  import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <NavBar />
    <transition
      name="fade"
      mode="out-in"
    >
      <RouterView />
    </transition>
  </div>
</template>

<style scoped>
  .fade-enter-active {
    transition: opacity 2s;
  }
  .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter-from {
    opacity: 0;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>
