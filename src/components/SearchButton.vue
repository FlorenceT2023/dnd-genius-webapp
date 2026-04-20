<script setup lang="ts">
import type { JsonFormat } from '@/models/jsonformat';
import { useSpellsStore } from '@/stores/spellsSearch';
import { NButton } from 'naive-ui'
import { ref } from 'vue';
import { useLoadingStore } from '@/stores/loading'


const spellStore = useSpellsStore()
// const loading = ref(false)
const loadingStore = useLoadingStore()


async function handleClick() {

   loadingStore.changeState()

   setTimeout(async () => {
      const response = await fetch(`http://localhost:8080/spells`)
      const result = await (response.json()) as JsonFormat
      spellStore.storeSpells(result.data.spells.map(({name}) => ({spellname: name})))
         }, 1000)



   
   // await new Promise(resolve => setTimeout(() => {
   //    loading.value = false
   //    resolve(true)},
   //    1500)
   // )


}

</script>

<template>
   <n-button :loading="loadingStore.loading" icon-placement="left" @click="handleClick" size="large" ghost color="#c4c4c4" strong round>
      Search
   </n-button>
</template>

<style scoped></style>