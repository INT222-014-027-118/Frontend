<template>
    <div>
        <Carousel class="container lg:max-w-7xl mx-auto" />
        <!-- <div class="" v-if="brandsObjs.length > 0"> -->
        <!-- <div class="h-full items-center mx-auto max-w-6xl bg-blue-100 dark:bg-gray-700 rounded-md mb-8 relative" v-for="brand in brandsObjs" :key="brand.brand"> -->
        <div class="container lg:max-w-7xl grid grid-cols-4 gap-1 md:gap-3 mx-auto my-3 md:my-7 md:px-0.5">
            <router-link :to="{ name: 'resultProducts', params: { categoryName: category.itmeName } }" v-for="category in categorys" :key="category">
                <div class="md:grid grid-cols-2 md:h-28 rounded-md ring ring-transparent transition shadow-md hover:ring-primary cursor-pointer bg-white">
                    <div class="flex flex-col justify-center items-center rounded-md p-3 sm:p-5 md:p-7 text-center bg-white dark:bg-blue-900 md:bg-gradient-to-r from-secondary to-white">
                        <i class="material-icons p-2 md:p-3 md:hidden rounded-full bg-primary text-white md:pointer-events-nonemb-3 mb-2">{{ category.icon }}</i>
                        <span class="text-xs text-black sm:text-base lg:text-xl tracking-tight font-semibold uppercase md:ml-3 z-10">{{ category.itmeName }}</span>
                    </div>
                    <div class="hidden md:block h-full bg-contain bg-center bg-no-repeat rounded-r-md" :style="{ backgroundImage: `url(${category.image})` }"></div>
                </div>
            </router-link>
        </div>

        <div class="container lg:max-w-7xl p-1 sm:px-5 md:px-0.5 mx-auto grid gap-1 md:gap-2 lg:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <router-link
                :to="{
                    name: 'Product',
                    params: { product_name: item.name, type: item.type, productId: item.productId, price: item.price },
                }"
                v-for="item in $store.getters.itemTest"
                :key="item.productId"
            >
                <BaseItem :product="item" />
            </router-link>
        </div>

        <!-- <div v-else class="h-screen w-full flex items-center justify-center select-none">
            <i class="material-icons text-4xl animate-spin" v-show="isLoad"> autorenew </i>
            <div class="text-4xl font-mono tracking-wide font-bold" v-show="!isLoad">Product Out</div>
        </div> -->
    </div>
</template>

<script>
import BaseItem from "../components/BaseItem.vue";
import headset from "../assets/category/headset.jpg";
import speaker from "../assets/category/speaker.jpg";
import keyboard from "../assets/category/keyboard.jpg";
import mouse from "../assets/category/mouse.png";
export default {
    components: {
        BaseItem,
    },
    data() {
        return {
            categorys: [
                { itmeName: "headphone", image: headset, icon: "headphones" },
                { itmeName: "speaker", image: speaker, icon: "speaker" },
                { itmeName: "keyboard", image: keyboard, icon: "keyboard" },
                { itmeName: "mouse", image: mouse, icon: "mouse" },
            ],
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted() {
        this.scrollToTop();
    },
};
</script>

<style></style>
