<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const message = ref('Hello, Vue!')
  unmounted(() => console.log(message.value))
</script>

<style scoped>
  #app {
    text-align: center;
    color: #2c3e50;
  }
</style>
