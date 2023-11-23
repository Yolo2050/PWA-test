<script setup>
  // import NavBar from '@/components/NavBar.vue'
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <!-- <NavBar /> -->
    <!-- 현재 경로에 맞는 컴포넌트를 Component라는 이름으로 받아오는 역할 -->
    <RouterView v-slot="{ Component }">
      <!-- 이 Component는 이후 <component :is="Component" />에서 사용되어 실제로 렌더링됩니다 -->
      <component :is="Component" />
    </RouterView>
  </div>
</template>

<style scoped>
  .fade-enter-active {
    transition: opacity 0.5s;
  }
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from {
    opacity: 0;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>
