<script setup>
  import BookCard from '@/components/BookCard.vue'

  /* <script setup> 구문에서 defineProps를 사용하여 props를 정의하면, 해당 props는 자동으로 컴포넌트의 스코프에 포함됩니다. 따라서 props 변수를 따로 선언할 필요가 없습니다. */
  defineProps({
    books: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <!-- `Select a Book to play with !` 가 화면 중앙에 오게 해줘 -->
  <div
    class="inline-flex h-12 items-center justify-center rounded-3xl border-4 border-double border-indigo-400 bg-black px-4 text-base font-bold text-white"
  >
    Select a Book to play with !
  </div>
  <div
    class="flex items-center justify-center gap-4 rounded-3xl border-4 border-double border-indigo-400 bg-black p-8 text-base font-bold text-white"
  >
    <div class="grid grid-cols-5 gap-4">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :book="book"
        class="m-3"
      ></BookCard>
    </div>
  </div>
</template>
<style scoped>
  ul.background {
    background-image: url('../assets/images/BackGround/img_main.png');
    /* background-size: cover; */
  }

  /* Add styles for a "selected" card */
  .card-selected {
    transform: scale(1.05);
    border: solid thick green;
  }

  /* Card */
  .card {
    display: inline-block;
    width: 13vw;
    overflow: hidden;
    border: 5px solid #0f7212;
    border-radius: 2%;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1vw;
    margin-right: 1vw;
    cursor: pointer;
  }

  .card img {
    width: 12vw;
    /* height: 15vw; */

    margin: 0;
  }

  .card .card-text {
    padding: 0 1rem;
    margin: 0;
    font-size: 1.2vw;
    font-weight: bold;
  }
</style>
