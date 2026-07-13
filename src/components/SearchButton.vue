<script setup lang="ts">
import type { JsonFormat } from '@/models/jsonformat'
import { useSpellsStore } from '@/stores/spells'
import { NButton } from 'naive-ui'
import { useLoadingStore } from '@/stores/loading'
import { useLevelStore } from '@/stores/spellsLevel.ts'
import { useSpellsSearchStore } from '@/stores/spellsSearch'
const spellStore = useSpellsStore()
const loadingStore = useLoadingStore()
const levelStore = useLevelStore()
const spellsSearch = useSpellsSearchStore()

// TODO consider moving that logic to a service
// We also need to account for users who use the search function instead of level search
// TODO fix line 21 and 25, url not working (look into mapping, list, or reduce)
// TODO Level 0 spells not displaying at all - Level 0 returns all spells currently
async function handleClick() {
  loadingStore.changeState(true)
  try {
    let spellUrl = `http://localhost:8080/spells`
    if (levelStore.level && spellsSearch.searchTerm !== '') {
      const keyWord = btoa(spellsSearch.searchTerm)
      spellUrl += `?level=${levelStore.level}&searchTerms=${keyWord}`
    } else if (levelStore.level) {
      spellUrl += `?level=${levelStore.level}`
    } else if (spellsSearch.searchTerm !== '') {
      const keyWord = btoa(spellsSearch.searchTerm)
      spellUrl += `?searchTerms=${keyWord}`
    }
    const response = await fetch(spellUrl)
    const result = (await response.json()) as JsonFormat
    spellStore.storeSpells(result.data.spells.map(({ name, id }) => ({ spellname: name, id })))
    spellStore.setHasError(false)
  } catch (error) {
    spellStore.setHasError(true)
  } finally {
    loadingStore.changeState(false)
  }
}
</script>

<template>
  <n-button
    :loading="loadingStore.loading"
    :disabled="loadingStore.loading"
    icon-placement="left"
    @click="handleClick"
    size="large"
    ghost
    color="#c4c4c4"
    strong
    round
  >
    Search
  </n-button>
</template>

<style scoped></style>
