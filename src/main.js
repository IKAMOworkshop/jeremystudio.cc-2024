import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import router from '@/plugins/router.js'
import '@/styles/reset.css'
import '@/styles/style.css'
import App from '@/App.vue'

const head = createHead()

createApp(App).use(head).use(router).mount('#app')
