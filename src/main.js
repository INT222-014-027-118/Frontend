import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueAgile from 'vue-agile'

const vue = createApp(App)
vue.use(store)
vue.use(router)
vue.use(VueAgile)
vue.mount('#app')
