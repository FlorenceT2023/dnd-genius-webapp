<script setup lang="ts">
import { type DropdownOption } from 'naive-ui'
import {ref} from 'vue'
import type { JsonFormat, Spell } from '../models/jsonformat'

const spells = ref([] as Spell[])
const spellsCount = ref(0)

const options: DropdownOption[] = [
  {
    label: 'Level 1 Spells',
    key: '1'
  },
  {
    label: "Level 2 Spells",
    key: '2'
  },
  {
    label: 'Level 3 Spells',
    key: '3'
  },
  {
    label: 'Level 4 Spells',
    key: '4'
  }
]




// handler when  user clicks a level spell option
async function handleSelect(key: string | number) {
  const response = await fetch(`https://www.dnd5eapi.co/api/2014/spells?level=${key}`)
  const result = (await response.json()) as JsonFormat
  console.log(result)
  spellsCount.value = result.count
  spells.value = result.results
  
}

</script>

<template>
  <n-dropdown
    trigger="hover"
    :options="options"
    @select="handleSelect"
  >
    <n-button size="large" class="button" round>Search Spells by Level</n-button>
  </n-dropdown>
    <n-space></n-space>
      <h2 v-if="spells.length != 0"> Level {{ spells[0]?.level }} Spells</h2>
      <div v-if="spells.length != 0">
          <table border="0" cellpadding="8">
      <thead>
        <tr>
          <th class="rowHeader">Spell Name</th>
          <!-- URL may change to Spell Description or something  -->
          <th class="rowHeader">URL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="spell in spells" :key="spell.name">
          <td align="left"><b>{{ spell.name }}</b></td>
          
          <td align="left"><a :href="`https://www.dnd5eapi.co${spell.url}`">https://www.dnd5eapi.co{{ spell.url }}</a></td>
        </tr>
      </tbody>
    </table>
    </div>

</template>

<style scoped>

.button { 
  color: lightgray;
}

.rowHeader {
  font-size: medium;
}

</style>