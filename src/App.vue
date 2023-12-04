<script setup>
  // RouterView: 현재 URL에 따라 다른 컴포넌트를 동적으로 렌더링
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <!-- RouterView가 현재 라우트에 해당하는 컴포넌트를 Component라는 변수로 제공하도록 함 -->
    <RouterView v-slot="{ Component }">
      <!-- 현재 라우트에 해당하는 컴포넌트를 렌더링 -->
      <component :is="Component" />
    </RouterView>
  </div>
</template>

<style scoped></style>
