import type { Spell } from '@/models/spell'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpellsStore = defineStore('spells', () => {
  const spells = ref<Spell[]>([])
  const hasError = ref<boolean>(false)

  function storeSpells(spellsList: Spell[]) {
    spells.value = spellsList
  }

  const setHasError = (toggle: boolean) => {
    hasError.value = toggle
  }

  return { spells, hasError, setHasError, storeSpells }
})
