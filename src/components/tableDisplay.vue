<script setup lang="ts">
import { computed, ref } from 'vue'
// import type { Spell } from '../models/jsonformat'
import { NDataTable } from 'naive-ui'
import { useSpellsStore } from '@/stores/spellsSearch'

// const spells = ref([] as Spell[])

const spellStore = useSpellsStore()
const data = computed(() => spellStore.spells)

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


  <!-- 4 states to consider doing an wired component: zero state, loading state, working state, error state  -->
   <!-- error state: https://www.naiveui.com/en-US/os-theme/components/result -->
    <!-- loading state: https://www.naiveui.com/en-US/os-theme/components/spin -->
  <n-data-table v-if="spellStore.spells.length !=0" :columns="columns" :data="data" :pagination="pagination" :bordered="false" />

</template>

<style scoped>
.button {
  color: lightgray;
}

.rowHeader {
  font-size: medium;
}

</style>