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
// I think we also need to account for users who use the search function instead of level search
// TODO fix line 21 and 25, url not working
async function handleClick() {
  loadingStore.changeState(true)
  try {
    let spellUrl = `http://localhost:8080/spells`
    if (levelStore.level) {
      spellUrl += `?level=${levelStore.level}`
    }
    if (spellsSearch.searchTerm !== '') {
      const x = btoa(spellsSearch.searchTerm)
      spellUrl += `&searchTerms=${x}`
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
