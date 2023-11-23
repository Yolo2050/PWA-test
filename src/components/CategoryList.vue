<script setup>
  defineProps({
    categories: {
      type: Array,
      required: true
    }
  })

  const emit = defineEmits(['select'])
</script>

<template>
  <!-- <ul class="background container"> -->
  <ul
    class="w-9/10 flex h-full items-center justify-center rounded-3xl border-4 border-double border-indigo-400 bg-black text-base font-bold text-white"
  >
    <li
      v-for="category in categories"
      :key="category.id"
      class="card small"
      @click="emit('select', category.id)"
    >
      {{ category.name }}
      <img
        :src="category.img"
        alt=""
      />
      <div class="card-text">
        {{ category['number-of-books'] }} <br />
        Books
      </div>
    </li>
  </ul>
</template>

<style scoped>
  ul.background {
    background-color: rgb(219, 219, 232);
  }
  .container {
    /* display: inline-block; */
    display: flex;
    justify-content: space-around;
    /* grid-template-columns: repeat(7, 13%); */
    border: 1px dashed rgb(101, 76, 214);
    padding: 1rem 0.5rem;
    background-color: rgb(231, 235, 210);
  }
  /* Add styles for a "selected" card */
  .card-selected {
    transform: scale(1.05);
    border: solid 3px green;
  }

  /* Card */
  .card.small {
    /* display: inline-block; */

    width: 8vw;
    overflow: hidden;
    border: 3px solid #136719;
    border-radius: 2%;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    /* margin-bottom: 1vw; */
    /* margin-right: 1vw; */
    cursor: pointer;
  }

  .card.small img {
    width: 7.5vw;
    height: 10vw;
    padding: 0.25vw;
    margin: 0;
  }

  .card .card-text {
    line-height: 2.5vh;
    text-align: center;
    padding: 0rem 0rem 0.5rem 0rem;
    margin: 0;
    font-size: 1.2vw;
    font-weight: bold;
  }
</style>
