import type { Spell } from '@/models/spell'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpellsStore = defineStore('spells', () => {
    const spells = ref<Spell[]>([])

    function storeSpells(spellsList: Spell[]) {
        console.log(spellsList)
        spells.value = spellsList
    }

    return { spells,  storeSpells }
})
