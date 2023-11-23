import { defineStore } from 'pinia'

export const useFeinStore = defineStore({
  id: 'pageview',
  state: () => ({
    currentPage: 'HolywoodKidsStoryHomeView'
    // "HomeView"
  }),
  getters: {},
  actions: {
    setCurrentPage(page) {
      this.currentPage = page
    },
    goToWeekView() {
      this.setCurrentPage('HolywoodKidsStoryWeekView')
    }
  }
})
