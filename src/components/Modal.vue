<script setup lang="ts">
import { NModal, NButton } from 'naive-ui';
import { ref, computed } from 'vue'
import { useSpellsStore } from '@/stores/spellsSearch'


// showModal probably should be a handleClick instead of a const?
const showModal = ref(false)
const spellStore = useSpellsStore()
const data = computed(() => spellStore.spells)

const bodyStyle = {
  width: '600px'
}
const segmented = {
  content: 'soft',
  footer: 'soft'
} as const

// Still working on this and not sure if this is similar to the search button handleClick event
async function handleClick (){
const showModal = ref(true)

}
</script>

<template>
  <n-button     
    color="#c4c4c4"
    size="large"
    :bordered="false"
    ghost
    strong
    round 
    @click="showModal = true"> Click here </n-button>

  <n-modal
    v-model:show="showModal"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    title="Spell Name" 
    :bordered="false"
    size="huge"
    :segmented="segmented"
  >
  <!-- This needs to display the description of the spell -->
    <div> Spell description </div>
  </n-modal>


</template>


<style scoped>
.button {
  color: lightgray;
}

</style>