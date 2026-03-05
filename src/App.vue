
<script setup lang="ts">
import Dropdown  from './components/Dropdown.vue';
import SearchBar from './components/SearchBar.vue';
import { NH1, NMessageProvider, NSpace } from 'naive-ui'
</script>



<template>
  <n-h1 class="title">D&D Genius App</n-h1>

  <n-space>
  
    <SearchBar />

    <n-message-provider>
      <Dropdown />
    </n-message-provider>

</n-space>

</template>

<style scoped>

.title { 
  color: lightgray;
}

</style>

