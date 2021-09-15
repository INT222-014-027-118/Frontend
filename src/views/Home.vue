<template>
    <div>
        <Carousel class="container mx-auto lg:max-w-7xl" />
        <!-- <div class="" v-if="brandsObjs.length > 0"> -->
        <!-- <div class="relative items-center h-full max-w-6xl mx-auto mb-8 bg-blue-100 rounded-md dark:bg-gray-700" v-for="brand in brandsObjs" :key="brand.brand"> -->
        <div class="container lg:max-w-7xl grid grid-cols-4 gap-1 md:gap-3 mx-auto my-3 md:my-7 md:px-0.5">
            <router-link :to="{ name: 'resultProducts', params: { categoryName: category.itmeName } }" v-for="category in categorys" :key="category">
                <div class="grid-cols-5 transition bg-white rounded-md shadow-md cursor-pointer md:grid md:h-28 ring ring-transparent hover:ring-primary">
                    <div class="flex flex-col items-center justify-center col-span-3 p-3 text-center bg-white rounded-md sm:p-5 md:p-7 dark:bg-blue-900 md:bg-gradient-to-r from-secondary to-white">
                        <i class="p-2 mb-2 text-white rounded-full material-icons md:p-3 md:hidden bg-primary md:pointer-events-nonemb-3">{{ category.icon }}</i>
                        <span class="z-10 text-xs font-semibold tracking-wide text-gray-800 uppercase sm:text-base lg:text-xl md:ml-2">{{ category.itmeName }}</span>
                    </div>
                    <div class="hidden h-full col-span-2 bg-center bg-no-repeat bg-contain md:block rounded-r-md" :style="{ backgroundImage: `url(${category.image})` }"></div>
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

        <!-- <div v-else class="flex items-center justify-center w-full h-screen select-none">
            <i class="text-4xl material-icons animate-spin" v-show="isLoad"> autorenew </i>
            <div class="font-mono text-4xl font-bold tracking-wide" v-show="!isLoad">Product Out</div>
        </div> -->
    </div>
</template>

<script>
import headset from "../assets/category/headset.jpg";
import speaker from "../assets/category/speaker.jpg";
import keyboard from "../assets/category/keyboard.jpg";
import mouse from "../assets/category/mouse.png";
export default {
    components: {
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
