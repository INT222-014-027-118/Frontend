import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueSplide from '@splidejs/vue-splide';
import Carousel from "@/components/Carousel.vue";
import Alert from "@/components/Alert.vue";

const vue = createApp(App)
vue.use(store)
vue.use(router)
vue.use(VueSplide)
vue.component('Carousel', Carousel)
vue.component('Alert', Alert)
vue.mount('#app')
