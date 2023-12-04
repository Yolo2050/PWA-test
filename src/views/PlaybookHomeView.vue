<template>
  <div class="container">
    <!-- Display Selected Book's Title -->
    <h1>{{ bookStore.selectedBook.title }}</h1>

    <!-- Display Menu Items -->
    <ul>
      <li
        v-for="(activity, index) in bookStore.activities"
        :key="index"
        @click="selectMenuItem(index)"
      >
        {{ activity.title }}
      </li>
    </ul>

    <!-- Display Current Component -->
    <component :is="currentComponent" />

    <!-- Display Done Button -->
    <button
      v-if="currentComponent"
      @click="selectNextItem"
    >
      Done
    </button>
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useBookStore } from '@/stores/bookStore'
  import { useRoute } from 'vue-router'

  const bookStore = useBookStore()
  const route = useRoute()

  onMounted(() => {
    const bookId = route.params.id
    const book = bookStore.selectBook(book) // get the book by its ID using bookId
  })
</script>
