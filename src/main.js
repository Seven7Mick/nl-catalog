import App from './App.vue'
import { createApp } from 'vue'
import store from './store'
import router from '@/router'
import { registerComponents } from '@/plugins/injectComponents'

import '@/assets/styles/index.css'

const app = createApp(App).use(router).use(store)
registerComponents(app)

app.mount('#app')
