<script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'

  const queryMovie = ref([])
  const isLoading = ref(true)
  const route = useRoute() // $route대신 route를 쓸수 있음

  // await는 async 함수 내에서만 사용할 수 있음
  onMounted(async () => {
    // await를 사용하면 응답을 받을 때까지 코드 실행이 일시 중지
    const result = await fetch(`http://localhost:3000/movies/${route.params.id}`)
    const response = await result.json()
    // console.log(response)
    queryMovie.value = response
    isLoading.value = false
  })

  console.log(route)
</script>

<template>
  <h1>Movie {{ route.params.id }} Details Page</h1>
  <!-- $route는 Vue 라우터의 전역 객체로, 현재 라우트의 동적 경로(라우트 경로에서 콜론(:)으로 시작하는) 매개변수를 나타내는 객체임. 해당 매개변수의 값은 사용자가 요청한 URL에 따라 동적으로 결정됩니다.
  주어진 코드에서 $route.params.id는 현재 라우트의 id 매개변수 값을 나타냅니다. 예를 들어, 페이지 URL이 /movies/123인 경우 $route.params.id는 "123"이 됩니다.
  $route 객체는 Vue 컴포넌트 내에서 사용할 수 있는 특별한 속성으로, Vue 라우터가 자동으로 제공함. -->
  <section class="m-6 bg-white p-4 dark:bg-gray-900">
    <div
      v-if="isLoading"
      class="container"
    >
      is Loading...
    </div>
    <div
      v-else
      class="container mx-auto flex flex-col items-center px-4 py-12 xl:flex-row"
    >
      <h3>Param: {{ $route.params.id }}</h3>
      <div class="flex justify-center xl:w-1/2">
        <img
          class="h-80 w-80 flex-shrink-0 rounded-md object-cover sm:h-[28rem] sm:w-[28rem]"
          :src="queryMovie.Poster"
          :alt="queryMovie.Title"
        />
      </div>
      <div class="mt-6 flex flex-col items-center xl:mt-0 xl:w-1/2 xl:items-start">
        <h2 class="text-3xl font-bold tracking-tight text-gray-800 dark:text-white xl:text-4xl">
          {{ queryMovie.Title }}
        </h2>
        <span class="m-2 rounded-md bg-slate-300 p-2 text-slate-800">{{ queryMovie.Year }} </span>
        <span class="m-2 rounded-md bg-slate-300 p-2 text-slate-800">{{ queryMovie.Runtime }}</span>
        <div class="mt-6 sm:-mx-2">
          <div class="inline-flex w-full overflow-hidden rounded-lg shadow sm:mx-2 sm:w-auto">
            <a
              href="#"
              class="inline-flex items-center justify-center bg-black px-5 py-3 text-base font-medium text-white"
            >
              <span class="mx-2">watch online</span>
            </a>
          </div>

          <div
            class="mt-4 inline-flex w-full overflow-hidden rounded-lg shadow sm:mx-2 sm:mt-0 sm:w-auto"
          >
            <a
              href="#"
              class="item-center inline-flex w-full justify-center bg-blue-900 px-5 py-3 text-base font-medium text-white"
            >
              <span class="mx-2">download</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
