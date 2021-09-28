<template>
    <div>
        <Carousel class="container mx-auto lg:max-w-7xl" />

        <div class="container lg:max-w-7xl grid grid-cols-4 gap-1 md:gap-3 mx-auto my-3 md:my-7 px-1">
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
                    params: { product_name: product.productName, productId: product.id, price: product.price, brand: product.brandName },
                }"
                v-for="product in $store.getters.products"
                :key="product.id"
            >
                <BaseProduct :product="product" />
            </router-link>
        </div>
    </div>
</template>

<script>
import headset from "../assets/category/headset.jpg";
import speaker from "../assets/category/speaker.jpg";
import keyboard from "../assets/category/keyboard.jpg";
import mouse from "../assets/category/mouse.png";
export default {
    components: {},
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
        this.$store.dispatch("loadProducts");
    },
    created() {},
};
</script>

<style></style>
