import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(naive)
app.use(pinia)

app.mount('#app')