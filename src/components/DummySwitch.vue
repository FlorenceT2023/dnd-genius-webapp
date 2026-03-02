<script setup lang="ts">
import { NSwitch } from 'naive-ui'

import { ref } from 'vue'

const active = ref(false)
</script>

<template>
  <n-space>
    <n-switch v-model:value="active" />
  </n-space>
</template>

<style scoped></style>
