<script setup lang="ts">
import { NInput } from 'naive-ui'
import { useSpellsStore } from '@/stores/spellsSearch'

const spellSearch = useSpellsStore()
// Add event handler for search bar


async function handleInput() {

}


</script>

<template>
  <n-input size="large" round placeholder="Enter Spell" />
</template>

<style scoped></style>
