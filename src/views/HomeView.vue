<script setup>
  import { ref } from 'vue'
  import NavBar from '@/components/NavBar.vue'
  import CategoryList from '@/components/CategoryList.vue'
  import SelectedBooksListing from '@/components/SelectedBooksListing.vue'
  import categoriesData from '/src/assets/data/category-list.json'
  import booksData from '/src/assets/data/booklist-total.json'

  const categories = ref(categoriesData)
  const books = ref(booksData)
  const selectedBooks = ref([])

  /* selectCategory 함수는 선택한 카테고리에 따라 적절한 책 목록을 selectedBooks에 할당합니다. "All Category"를 선택하면 모든 책을 반환하고, 그 외의 카테고리를 선택하면 해당 카테고리의 책만 반환합니다. */
  const selectCategory = (categoryId) => {
    if (categoryId === 0) {
      // All Category
      selectedBooks.value = Object.values(books.value).flat()
    } else {
      const category = categories.value.find((category) => category.id === categoryId)
      selectedBooks.value = books.value[category['category-name-short']] || []
    }
  }
</script>

<template>
  <div>
    <NavBar />
    <header class="lh-2">
      <div class="wrapper pb-5 text-center text-2xl">
        <h1 class="">Welcome to Feinschule playbook library !</h1>
      </div>

      <p>Select a Book to play with !</p>
    </header>

    <main>
      <CategoryList
        :categories="categories"
        @select="selectCategory"
      />
      <SelectedBooksListing :books="selectedBooks" />
      <!-- <h5>Finish</h5> -->
    </main>
    <!-- 임시 버튼 for routing test -->
    <button
      class="gotoHk101a"
      @click="() => router.push({ name: 'Hk101aView' })"
    >
      gotoHk101a
    </button>
    <!-- <test> <Hk101aView />> </test> -->
    <!-- <Hk101aView /> -->
  </div>
</template>

<style scoped>
  /* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }
  }
</style>
