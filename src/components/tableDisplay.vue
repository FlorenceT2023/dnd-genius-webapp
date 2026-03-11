<script setup lang="ts">
import { computed } from 'vue'
import { NDataTable } from 'naive-ui'
import { useSpellsStore } from '@/stores/spellsSearch'


const spellStore = useSpellsStore()
const data = computed(() => spellStore.spells)

function createColumns() {
  return [
    {
      title: 'Spell Name',
      key: 'spellname'
    }
  ]
}


const columns = createColumns()
const pagination = false as const
const themeOverrides = {
  DataTable: {
    thColor: '#242424',
    thTextColor: '#ffffff',
    thFontWeight: '700',
    thFontSize: '22px',
    tdColor: '#242424',
    tdTextColor: '#ffffff',
    tdColorHover: '#575757'
  }
};

</script>

<template>
  <!-- Perhaps make the spell name the URL??? -->


  <!-- 4 states to consider doing an wired component: zero state, loading state, working state, error state  -->
   <!-- error state: https://www.naiveui.com/en-US/os-theme/components/result -->
    <!-- loading state: https://www.naiveui.com/en-US/os-theme/components/spin -->

  <n-config-provider :theme-overrides="themeOverrides">
      <n-data-table v-if="spellStore.spells.length !=0" :columns="columns" :data="data" :pagination="pagination" :bordered="false" />

  </n-config-provider>

</template>

<style scoped>
.button {
  color: lightgray;
}

.rowHeader {
  font-size: medium;
}

</style>