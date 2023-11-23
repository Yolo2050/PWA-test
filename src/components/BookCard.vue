<script setup>
  defineProps({
    book: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div
    class="flex max-w-sm justify-center rounded-lg border border-gray-200 bg-white pt-3 shadow-md dark:border-gray-700 dark:bg-gray-800"
  >
    <!--  -->
    <div class="">
      <img
        class="rounded-t-lg"
        :src="book['img-tiny']"
        :alt="book['book-title']"
      />
      <h2
        class="rounded-b-lg bg-indigo-700 p-2 text-white"
        style="white-space: pre-line"
      >
        {{ book['book-title'] }}
      </h2>
    </div>

    <!-- Title 클릭하면 개별 Book으로 이동하는 코드 구현! -->
    <!-- 
    <div class="p-5">
      <RouterLink :to="`/books/${book.id}`">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ book['book-title'] }}
        </h5>
      </RouterLink>
      <span class="mr-4">{{ book['book-title'] }}</span>
      <span>{{ book['book-title'] }}</span>
    </div>
    -->
  </div>
</template>

<style scoped></style>
