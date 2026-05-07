<script setup lang="ts">
import { computed, reactive } from 'vue'
import { NDataTable, NSpin } from 'naive-ui'
import { useSpellsStore } from '@/stores/spellsSearch'
import { useLoadingStore } from '@/stores/loading.ts'
import Modal from '@/components/Modal.vue'

const spellStore = useSpellsStore()
const loadingStore = useLoadingStore()

// I think data needs to be modified in order for modal to work?
const data = computed(() => spellStore.spells)


function createColumns() {
  return [
    {
      title: 'Spell Name',
      key: 'spellname',
    },
  ]
}


const columns = createColumns()
const pagination = reactive({
  page: 1,
  pageSize: 10,
  onChange: (page: number) => {
    pagination.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize
    pagination.page = 1
  }
})
const themeOverrides = {
  DataTable: {
    thColor: '#242424',
    thTextColor: '#ffffff',
    thFontWeight: '700',
    thFontSize: '22px',
    tdColor: '#242424',
    tdTextColor: '#ffffff',
    tdColorHover: '#575757',
  },
}
</script>

<template>
  <!-- Perhaps make the spell name the URL??? -->
  <!-- 4 states to consider doing an wired component: zero state, loading state, working state, error state  -->
  <!-- error state: https://www.naiveui.com/en-US/os-theme/components/result -->
  <!-- loading state: https://www.naiveui.com/en-US/os-theme/components/spin -->

  <!-- Should the data table be an array of modals instead of the list of spells from spellStore? -->
  <n-config-provider :theme-overrides="themeOverrides">
    <n-flex vertical class="wrapper">
      <n-spin v-if="!spellStore.hasError && loadingStore.loading" size="large" />

      <n-result
        v-if="!loadingStore.loading && spellStore.hasError"
        status="500"
        title="500 Server Error"
      >
        <div>
          <p class="error-result">Something went wrong...</p>
        </div>
      </n-result>
      <n-data-table
        v-if="!loadingStore.loading && !spellStore.hasError && spellStore.spells.length != 0"
        :columns="columns"
        :data="data" 
        :pagination="pagination"
        :bordered="false"
      />

      <Modal v-if="!loadingStore.loading && !spellStore.hasError && spellStore.spells.length != 0" />
    </n-flex>
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
