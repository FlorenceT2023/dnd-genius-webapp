import type { Spell } from '@/models/spell'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpellsStore = defineStore('spells', () => {
    const spells = ref<Spell[]>([{ spellname: 'flo' }])

    function storeSpells(spellsList: Spell[]) {
        spells.value = spellsList
    }

    return { spells,  storeSpells }
})
