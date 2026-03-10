<script setup lang="ts">
import type { JsonFormat } from '@/models/jsonformat';
import { useSpellsStore } from '@/stores/spellsSearch';
import { NButton } from 'naive-ui'

const spellStore = useSpellsStore()

async function handleClick() {
   // await new Promise(resolve => setTimeout(resolve, 3000))
   const response = await fetch(`http://localhost:8080/spells`)
   const result = (await response.json()) as JsonFormat

   spellStore.storeSpells(result.data.spells.map(({name}) => ({spellname: name})))
}

</script>

<template>
   <n-button @click="handleClick" size="large" ghost color="#c4c4c4" strong round>
      Search
   </n-button>
</template>

<style scoped></style>