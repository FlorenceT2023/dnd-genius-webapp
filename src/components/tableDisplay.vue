<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { NDataTable, NSpin, NModal } from 'naive-ui'
import { useSpellsStore } from '@/stores/spellsSearch'
import { useLoadingStore } from '@/stores/loading.ts'
import { useSpellsDescriptionStore } from '@/stores/spellsDescription'
import type { ModalFormat } from '@/models/modalformat'

const spellStore = useSpellsStore()
const loadingStore = useLoadingStore()
const spellsDescriptionStore = useSpellsDescriptionStore()
const showModal = ref(false)
const title = ref<string>("")
const description = ref<string>("")
const show = ref(false)

const data = computed(() => spellStore.spells)

interface RowData {
  id: string
  spellname: string
}

async function handleClick(row: RowData) {

  showModal.value = true
  title.value = row.spellname
  // TODO: Add error state to rowProps (look at SearchButton.vue)
  // TODO: Add loading state to rowProps
  // TODO: Refactor Modal to its own component file
  // TODO: Add API call to a service instead
    spellsDescriptionStore.changeState(true)
  try {
    let spellUrl = `http://localhost:8080/spell/${row.id}`
    const response = await fetch(spellUrl)
    const result = (await response.json()) as ModalFormat
    description.value = result.data.description
    // console.log(result)
  } catch(error) {
    spellsDescriptionStore.errorState(true)
  } finally {
    spellsDescriptionStore.changeState(true)
  }


}

function rowProps(row: RowData) {

    return {
      style: 'cursor: pointer;',
        onClick: async () => { handleClick(row) }
  }
}

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
  },
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

const bodyStyle = {
  width: '600px'
}
const segmented = {
  content: 'soft',
  footer: 'soft'
} as const

</script>

<template>
  <!-- Perhaps make the spell name the URL??? -->
  <!-- 4 states to consider doing an wired component: zero state, loading state, working state, error state  -->
  <!-- error state: https://www.naiveui.com/en-US/os-theme/components/result -->
  <!-- loading state: https://www.naiveui.com/en-US/os-theme/components/spin -->

  <n-modal-provider>
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
        :row-props="rowProps" 
        :pagination="pagination"
        :bordered="false"
      />

        <n-spin size = "medium" :show="show">
          <n-modal
          @click="show = !show"
          :loading="spellsDescriptionStore.loading"
          v-model:show="showModal"
          class="custom-card"
          preset="card"
          :style="bodyStyle"
          :title= "title"
          :bordered="false"
          size="huge"
          :segmented="segmented"
        >
        
          <div> {{ description }} </div>
        </n-modal>
      </n-spin>
    </n-flex>
  </n-config-provider>
  </n-modal-provider>
</template>

<style scoped>
.button {
  color: lightgray;
}

.rowHeader {
  font-size: medium;
}
</style>
