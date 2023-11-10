<script setup>
  import { ref, onMounted } from 'vue'
  import MovieCard from '@/components/MovieCard.vue'

  const movieList = ref([])

  // Loading 중일 때 사용자 불안 없애주기기
  const isLoading = ref(true)

  // 컴포넌트가 마운트된 후 실행되는 훅
  onMounted(async () => {
    const result = await fetch('http://localhost:3000/movies')
    const response = await result.json()
    movieList.value = response
    isLoading.value = false
  })
</script>

<template>
  <h1>Movies</h1>
  <div
    v-if="isLoading"
    class="mx-auto max-w-sm"
  >
    <span class="text-2xl font-bold text-indigo-700">is Loading ...</span>
  </div>
  <!-- <pre>{{ movieList }}</pre> -->
  <!-- <h1>movies</h1> -->
  <div
    v-else
    class="grid grid-cols-4 gap-4"
  >
    <MovieCard
      v-for="movie in movieList"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>
