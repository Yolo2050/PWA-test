<script setup>
  import { ref } from 'vue'
  import NavBar from '@/components/NavBar.vue'
  import CategoryList from '@/components/CategoryList.vue'
  import SelectedBooksListing from '@/components/SelectedBooksListing.vue'
  import categoriesData from '@/data/category-list.json'
  import booksData from '@/data/booklist-total.json'
  // temp for video test
  // import PlayVideo from '../components/PlayVideo.vue'

  // 카테고리 데이터와 책 데이터를 가져옴
  const categories = ref(categoriesData)
  const books = ref(booksData)
  const selectedBooks = ref([])

  // selectCategory 함수는 선택한 카테고리에 해당하는 책 목록을 selectedBooks에 할당합니다.
  // "All Category"를 선택하면 모든 책을 반환하고, 그 외의 카테고리를 선택하면 해당 카테고리의 책만 반환합니다.
  const selectCategory = (categoryId) => {
    if (categoryId === 0) {
      // Object.values()는 객체의 모든 값들을 배열로 반환
      // Array.prototype.flat() 메서드는 중첩된 배열을 평탄화하여, 하나의 배열로 만듦
      selectedBooks.value = Object.values(books.value).flat()
    } else {
      // find 메서드는 배열에서 주어진 판별 함수를 만족하는 첫 번째 요소를 반환
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
    <!-- <button @click="() => router.push({ name: 'Hk101aView' })">gotoHk101a</button> -->
    <button @click="() => router.push({ name: 'PlayVideo' })">Chant</button>

    <!-- <Hk101aView /> -->
    <!-- <PlayVideo /> -->
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
