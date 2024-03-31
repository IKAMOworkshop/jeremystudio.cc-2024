import { createApp } from 'vue'
import router from '@/plugins/router.js'
import '@/styles/reset.css'
import '@/styles/style.css'
import App from '@/App.vue'

createApp(App).use(router).mount('#app')
