import { setActivePinia, createPinia } from 'pinia'
import { useSpellsStore } from '@/stores/spellsSearch'
import { expect, describe, beforeEach, it } from 'vitest'
import type { Spell } from '@/models/spell'

describe('Spells Store', () => {
  let store: ReturnType<typeof useSpellsStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useSpellsStore()
  })

  describe('Initial values', () => {
    it('should initialise with default values', () => {
      expect(store.spells).toEqual([])
      expect(store.hasError).toBe(false)
    })
  })

  describe('storeSpells', () => {
    it('should update spells', () => {
      const spells: Spell[] = [{ spellname: 'Fireball' }, { spellname: 'Magic Missile' }]

      store.storeSpells(spells)
      expect(store.spells).toHaveLength(2)
      expect(store.spells).toEqual(spells)

      store.storeSpells([])
      expect(store.spells).toHaveLength(0)
      expect(store.spells).toEqual([])
    })
  })

  describe('storeSpells', () => {
    it('should update hasError', () => {
      store.setHasError(true)
      expect(store.hasError).toBe(true)

      store.setHasError(false)
      expect(store.hasError).toBe(false)
    })
  })
})
