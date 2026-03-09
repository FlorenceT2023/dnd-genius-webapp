<script setup lang="ts">
import { computed, ref } from 'vue'
// import type { Spell } from '../models/jsonformat'
import { NDataTable } from 'naive-ui'
import { useSpellsStore } from '@/stores/spellsSearch'

// const spells = ref([] as Spell[])

const spellStore = useSpellsStore()
const data = spellStore.spells

function createColumns() {
  return [
    {
      title: 'Spell Name',
      key: 'spellname'
    }
  ]
}

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