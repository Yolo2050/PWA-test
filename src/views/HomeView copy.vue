<script setup>
  import CategoryList from '@/components/CategoryList.vue'
  import SelectedBooksListing from '@/components/SelectedBooksListing.vue'
  import NavBar from '@/components/NavBar.vue'

  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

<template>
  <div>
    <NavBar />
    <header class="lh-2">
      <img
        alt="Feinschule logo"
        class="logo"
        src="@/assets/images/feinschele142x138.png"
        width="70"
        height="70"
      />

      <div class="wrapper pb-5 text-center text-2xl">
        <h1 class="">Welcome to Feinschule playbook library !</h1>
      </div>
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          width: 200px;
          height: 80px;
          border: 3px solid #ffd700;
          background-color: #ff69b4;
          border-radius: 20px;
          font-family: 'Comic Sans MS', cursive, sans-serif;
          font-size: 24px;
          color: #ffffff;
          text-shadow: 2px 2px 4px #000000;
        "
      >
        MY BOOKS
      </div>
      <p>Select a Book to play with !</p>
    </header>

    <main>
      <CategoryList />
      <SelectedBooksListing />
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
