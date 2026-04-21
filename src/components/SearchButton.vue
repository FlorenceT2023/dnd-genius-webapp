<script setup lang="ts">
import type { JsonFormat } from '@/models/jsonformat'
import { useSpellsStore } from '@/stores/spellsSearch'
import { NButton } from 'naive-ui'
import { useLoadingStore } from '@/stores/loading'
import { useLevelStore } from '@/stores/spellsLevel.ts'

const spellStore = useSpellsStore()
const loadingStore = useLoadingStore()
const levelStore = useLevelStore()

async function handleClick() {
  loadingStore.changeState(true)

  try {
    let spellUrl = `http://localhost:8080/spells`
    if (levelStore.level) {
      spellUrl += `?level=${levelStore.level}`
    }

    const response = await fetch(spellUrl)
    const result = (await response.json()) as JsonFormat
    spellStore.storeSpells(result.data.spells.map(({ name }) => ({ spellname: name })))
  } catch (error) {
    // TODO handle error state, e.g. the API call didn't succeed
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
