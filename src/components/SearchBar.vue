<script setup lang="ts">
import { NInput } from 'naive-ui'
import { useSpellsSearchStore } from '@/stores/spellsSearch'

const store = useSpellsSearchStore()
</script>

<template>
  <n-input v-model:value="store.searchTerm" size="large" round placeholder="Enter Spell" />
</template>

<style scoped></style>
