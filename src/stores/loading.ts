import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {
  state: () => {
    return {
      loading: false,
    }
  },

  actions: {
    changeState(state: boolean) {
      this.loading = state
    },
  },
})