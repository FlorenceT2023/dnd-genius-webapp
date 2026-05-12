import { defineStore } from 'pinia'

export const useSpellsDescriptionStore = defineStore('spellsDescription', {
  state: () => {
    return {
      loading: false,
      error: false
    }
  },

  actions: {
    changeState(state: boolean) {
      this.loading = state
    },
    errorState(error: boolean) {
        this.error = error
    },
  },
})