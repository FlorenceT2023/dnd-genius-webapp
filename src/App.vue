<script setup lang="ts">
import Dropdown from './components/Dropdown.vue';
import SearchBar from './components/SearchBar.vue';
import { NH1, NMessageProvider, NSpace } from 'naive-ui'
import TableDisplay from '@/components/tableDisplay.vue';
import SearchButton from './components/SearchButton.vue';
</script>



<template>
  <n-h1 class="title">D&D Genius App</n-h1>
  
  <n-space vertical>

    <n-space>

      <SearchBar />
      <Dropdown />
      <SearchButton />
    </n-space>
    <TableDisplay />
  </n-space>

</template>

<style scoped>
.title {
  color: lightgray;
}
</style>
