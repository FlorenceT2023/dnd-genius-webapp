import type { Spell } from '@/models/spell'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpellsStore = defineStore('spells', () => {
  const spells = ref<Spell[]>([])
  const loading = ref<boolean>(false)
  const hasError = ref<boolean>(false)

  function setLoading(newState: boolean) {
    loading.value = newState
  }

  function storeSpells(spellsList: Spell[]) {
    spells.value = spellsList
  }

  const setHasError = (toggle: boolean) => {
    hasError.value = toggle
  }

  return { loading, spells, hasError, setHasError, storeSpells, setLoading }
})
