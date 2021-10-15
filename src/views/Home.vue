<template>
    <div class="sm:pt-2 md:pt-3">
        <Carousel class="container mx-auto lg:max-w-7xl" :images="promotionImages" />

        <div class="container lg:max-w-7xl grid grid-cols-4 gap-2 md:gap-3 mx-auto my-3 md:my-7 p-2 sm:px-5 md:px-3">
            <router-link :to="{ name: 'resultProducts', params: { categoryName: category.itemName } }" v-for="category in categorys" :key="category">
                <div class="grid-cols-5 transition bg-gradient-to-r from-transparent via-white to-white dark:to-transparent md:dark:to-white rounded-md shadow-md cursor-pointer md:grid md:h-28 ring ring-transparent hover:ring-primary overflow-hidden">
                    <div
                        class="flex flex-col items-center justify-center col-span-3 p-3 text-center border border-secondary dark:border-dark_secondary bg-white rounded-md sm:p-5 md:p-7 dark:bg-dark_tertiary md:bg-gradient-to-r from-secondary dark:from-gray-700 to-primary dark:to-dark_primary"
                    >
                        <i class="p-2 mb-2 text-white rounded-full material-icons md:p-3 md:hidden bg-primary md:pointer-events-nonemb-3">{{ category.icon }}</i>
                        <span class="z-10 text-xs font-bold tracking-wide md:text-gray-100 dark:text-gray-100 uppercase sm:text-base lg:text-xl">{{ category.itemName }}</span>
                    </div>
                    <div class="hidden h-full col-span-2 bg-center bg-no-repeat bg-contain md:block rounded-r-md" :style="{ backgroundImage: `url(${category.image})` }"></div>
                </div>
            </router-link>
        </div>

        <div class="container lg:max-w-7xl p-2 sm:px-5 md:px-3 mx-auto grid gap-1 md:gap-2 lg:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <router-link
                :to="{
                    name: 'Product',
                    params: { productName: product.productName == '' ? 'Product name is not defined' : product.productName, productId: product.id },
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
                { itemName: "headset", image: headset, icon: "headphones" },
                { itemName: "speaker", image: speaker, icon: "speaker" },
                { itemName: "keyboard", image: keyboard, icon: "keyboard" },
                { itemName: "mouse", image: mouse, icon: "mouse" },
            ],
            promotionImages: [
                "https://image.bestreview.asia/wp-content/uploads/2020/03/best-gaming-chair.jpg",
                "https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg",
                "https://instore.bnn.in.th/wp-content/uploads/2019/01/FTIM-10GamingGear.jpg",
                "https://image.bestreview.asia/wp-content/uploads/2021/06/best-gaming-mouse.jpg",
                "https://instore.bnn.in.th/wp-content/uploads/2020/05/gaming-gear-Cover-FB.jpg",
                "https://mercular.s3.ap-southeast-1.amazonaws.com/images/articles/2020/10/Gaming-1000-bth-885x400.jpg",
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
    created() {
        this.$store.dispatch("loadProducts");
    },
};
</script>

<style></style>
