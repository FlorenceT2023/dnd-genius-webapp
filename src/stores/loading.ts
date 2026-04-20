import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', {

   state: () => {
      return {
         loading: false
      }
      
   },
   actions: {
      async changeState() {
        this.loading = true
         
        setTimeout(() => {
            this.loading = false
         }, 1000)

         
      }
   }
})