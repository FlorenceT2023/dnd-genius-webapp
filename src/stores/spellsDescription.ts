import { defineStore } from 'pinia'

export const useSpellsDescriptionStore = defineStore('spellsDescription', {
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