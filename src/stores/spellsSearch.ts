import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpellsSearchStore = defineStore('searchTerms', () => {
  const searchTerm = ref('')

  return { searchTerm }
})
