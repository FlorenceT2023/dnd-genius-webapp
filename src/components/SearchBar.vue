<script setup lang="ts">
import { NInput } from 'naive-ui'
import { useSpellsStore } from '@/stores/spells'
import { useSpellsSearchStore } from '@/stores/spellsSearch'
import { ref } from 'vue'

const store = useSpellsSearchStore()
</script>

<template>
  <n-input v-model:value="store.searchTerm" size="large" round placeholder="Enter Spell" />
</template>

<style scoped></style>
