<script setup>
  defineProps({
    movie: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div
    class="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="flex justify-center pt-3">
      <img
        class="rounded-t-lg"
        :src="movie.Poster"
        :alt="movie.Title"
      />
    </div>
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ movie.Title }}
      </h5>
      <span class="mr-4">{{ movie.Year }}</span>
      <span>{{ movie.Runtime }}</span>
    </div>
  </div>
</template>

<style scoped></style>
