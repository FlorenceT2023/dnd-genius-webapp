<template>
  <n-dropdown
    trigger="hover"
    :options="options"
    @select="handleSelect"
  >
    <n-button size="large" class="button" round>Search by Level</n-button>
  </n-dropdown>
</template>

<script setup lang="ts">
import { useMessage, type DropdownOption } from 'naive-ui'

const message = useMessage()

const options: DropdownOption[] = [
  {
    label: 'Level 1 Spells',
    key: 'level-one-spells'
  },
  {
    label: "Level 2 Spells",
    key: 'level-two-spells'
  },
  {
    label: 'Level 3 Spells',
    key: 'level-three-spells'
  },
  {
    label: 'Level 4 Spells',
    key: 'level-four-spells'
  }
]

// handler when  user clicks a level spell option
function handleSelect(key: string | number) {
  message.info(`You selected: ${key}`)
}
</script>


<style scoped>

.button { 
  color: lightgray;
}

</style>