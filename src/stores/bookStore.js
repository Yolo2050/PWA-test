// bookStore.js
import { defineStore } from 'pinia'

export const useBookStore = defineStore({
  id: 'book',
  state: () => ({
    selectedBook: null,
    activities: [],
    currentActivityIndex: -1
  }),
  actions: {
    selectBook(book) {
      this.selectedBook = book
      // fetch and set activities from info_day.json file
      fetch(`../assets/data/${book}/info_day.json`)
        .then((response) => response.json())
        .then((data) => {
          this.activities = data.activities
          this.currentActivityIndex = -1
        })
    },
    selectNextActivity() {
      if (this.currentActivityIndex < this.activities.length - 1) {
        this.currentActivityIndex++
      }
    },
    getCurrentComponent() {
      if (this.currentActivityIndex >= 0 && this.currentActivityIndex < this.activities.length) {
        const code = String(this.activities[this.currentActivityIndex].code).padStart(2, '0')
        return import(`../components/SubComponent${code}.vue`)
      }
      return null
    }
  }
})
