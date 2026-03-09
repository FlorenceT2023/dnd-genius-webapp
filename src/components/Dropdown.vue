<script setup lang="ts">
import { type DropdownOption } from 'naive-ui'
import {ref} from 'vue'
import type { JsonFormat, Spell } from '../models/jsonformat'
import { useLevelStore } from '../stores/spellsLevel'

const spells = ref([] as Spell[])
const spellsCount = ref(0)
const levelStore = useLevelStore()

const options: DropdownOption[] = [
  {
    label: 'Level 1 Spells',
    key: 1
  },
  {
    label: "Level 2 Spells",
    key: 2
  },
  {
    label: 'Level 3 Spells',
    key: 3
  },
  {
    label: 'Level 4 Spells',
    key: 4
  }
]


// handler when  user clicks a level spell option
async function handleSelect(key: number) {
  // const response = await fetch(`https://localhost:8080/spells/api/2014/spells?level=${key}`)
  // const result = (await response.json()) as JsonFormat
  levelStore.selectLevel(key)
  // console.log(result)
  // spellsCount.value = result.count
  // spells.value = result.results
  
}

</script>

<template>
  <n-dropdown
    trigger="hover"
    :options="options"
    @select="handleSelect"
  >
    <n-button size="large" class="button" round>Level {{ levelStore.level }}</n-button>
  </n-dropdown>

</template>

<style scoped>


.button { 
  color: lightgray;
}

.rowHeader {
  font-size: medium;
}

</style>