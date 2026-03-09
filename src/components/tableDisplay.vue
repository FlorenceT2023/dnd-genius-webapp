<script setup lang="ts">
import { ref } from 'vue'
// import type { Spell } from '../models/jsonformat'
import { NDataTable } from 'naive-ui'

// const spells = ref([] as Spell[])

function createColumns() {
  return [
    {
      title: 'Spell Name',
      key: 'spellname'
    }
  ]
}

interface Song {
  no: number
  spellname: string
  length: string
}

const data: Song[] = [
  { no: 3, spellname: 'Wonderwall', length: '4:18' },
  { no: 4, spellname: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, spellname: 'Champagne Supernova', length: '7:27' }
]
const columns = createColumns()
const pagination = false as const

</script>

<template>
  <!-- <h2 v-if="spells.length != 0"> Level {{ spells[0]?.level }} Spells</h2>
      <div v-if="spells.length != 0"> -->

  <!-- Perhaps make the spell name the URL??? -->


  <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" />

</template>

<style scoped>
.button {
  color: lightgray;
}

.rowHeader {
  font-size: medium;
}
</style>