import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueAgile from 'vue-agile'
import VueSplide from '@splidejs/vue-splide';
import Carousel from "@/components/Carousel.vue";
import Carousel2 from "@/components/Carousel2.vue";

const vue = createApp(App)
vue.use(store)
vue.use(router)
vue.use(VueSplide)
vue.use(VueAgile)
vue.component('Carousel',Carousel)
vue.component('Carousel2',Carousel2)
vue.mount('#app')
