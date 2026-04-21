<script setup lang="ts">
import { type DropdownOption } from 'naive-ui'
import { useLevelStore } from '../stores/spellsLevel'

const levelStore = useLevelStore()

const options: DropdownOption[] = [
  {
    label: 'Level 1 Spells',
    key: 1,
  },
  {
    label: 'Level 2 Spells',
    key: 2,
  },
  {
    label: 'Level 3 Spells',
    key: 3,
  },
  {
    label: 'Level 4 Spells',
    key: 4,
  },
]

// handler when  user clicks a level spell option
async function handleSelect(key: number) {
  levelStore.selectLevel(key)

}
// TODO tiny UI bug where it display "Level 0" when no level is selected, it should say something like "All Spells"
</script>

<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
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
