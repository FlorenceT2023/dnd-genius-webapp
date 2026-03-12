<script setup lang="ts">
import type { JsonFormat } from '@/models/jsonformat';
import { useSpellsStore } from '@/stores/spellsSearch';
import { NButton } from 'naive-ui'
import { ref } from 'vue';

const spellStore = useSpellsStore()
const loading = ref(false)


async function handleClick() {
   loading.value = true;
   
   await new Promise(resolve => setTimeout(() => {
      loading.value = false
      resolve(true)},
      1500)
   )

   const response = await fetch(`http://localhost:8080/spells`)
   const result = (await response.json()) as JsonFormat

   spellStore.storeSpells(result.data.spells.map(({name}) => ({spellname: name})))
}

</script>

<template>
   <n-button :loading="loading" icon-placement="left" @click="handleClick" size="large" ghost color="#c4c4c4" strong round>
      Search
   </n-button>
</template>

<style scoped></style>