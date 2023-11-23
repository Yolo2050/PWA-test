<template>
  <div class="container">
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
  import { ref, onMounted } from 'vue'
  import { useBookStore } from '@/stores/bookStore'

  const bookStore = useBookStore()
  const currentComponent = ref(null)

  function selectMenuItem(index) {
    bookStore.currentActivityIndex = index
    updateCurrentComponent()
  }

  function selectNextItem() {
    bookStore.selectNextActivity()
    updateCurrentComponent()
  }

  function updateCurrentComponent() {
    currentComponent.value = null // reset the component
    if (bookStore.selectCurrentItem()) {
      // if there's a next item
      currentComponent.value = () => bookStore.getCurrentComponent() // lazy-load the component
    }
  }

  // Select the initial item when the component is created
  onMounted(() => {
    selectNextItem()
  })
</script>
