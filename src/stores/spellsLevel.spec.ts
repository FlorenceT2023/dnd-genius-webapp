import { setActivePinia, createPinia } from 'pinia'
import { useLevelStore } from '@/stores/spellsLevel'
import { expect, describe, beforeEach, it } from 'vitest'

describe('Spells Level Store', () => {
  let store: ReturnType<typeof useLevelStore>

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useLevelStore()
  })

  describe('Initial values', () => {
    it('should initialise with default values', () => {
      expect(store.level).toEqual(0)
    })
  })

  describe('selectLevel', () => {
    it('should update level', () => {
      store.selectLevel(123)
      expect(store.level).toEqual(123)

      store.selectLevel(456)
      expect(store.level).toEqual(456)
    })
  })
})
