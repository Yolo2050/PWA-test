<script setup>
  import { ref, onMounted } from 'vue'
  import MovieCard from '@/components/MovieCard.vue'

  const movieList = ref([])

  // Loading 중일 때 사용자 불안 없애주기기
  const isLoading = ref(true)

  // 컴포넌트가 마운트된 후 실행되는 훅
  onMounted(() => {
    // GET 요청
    fetch('http://localhost:3000/movies')
      // GET 요청에 대한 응답을 JSON 형식으로 변환
      .then((response) => response.json())
      // apiMovies는 response.json()에서 변환된 JSON 데이터를 가리키는 변수(임의로 작명). 이를 영화 목록 movieList에 할당
      .then((apiMovies) => {
        movieList.value = apiMovies
      })
  })
</script>

<template>
  <h1>Movies</h1>
  <div class="mx-auto max-w-sm">
    <span class="text-2xl font-bold text-indigo-700">is Loading ...</span>
  </div>
  <!-- <pre>{{ movieList }}</pre> -->
  <!-- <h1>movies</h1> -->
  <div class="grid grid-cols-3 gap-4">
    <MovieCard
      v-for="movie in movieList"
      :key="movie.id"
      :movie="movie"
    />
  </div>
</template>
