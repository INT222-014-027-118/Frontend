<template>
    <div class="h-full mx-auto">
        <!-- <Carousel /> -->
        <Carousel class="container mx-auto" />
        <!-- <div class="" v-if="brandsObjs.length > 0"> -->
        <!-- <div class="h-full items-center mx-auto max-w-6xl bg-blue-100 dark:bg-gray-700 rounded-md mb-8 relative" v-for="brand in brandsObjs" :key="brand.brand"> -->

        <div class="container lg:max-w-7xl p-1 pt-2 sm:px-5 sm:pt-10 mx-auto grid gap-1 md:gap-2 lg:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            <router-link
                :to="{
                    name: 'Product',
                    params: { product_name: item.name, type: item.type, productId: item.productId, price: item.price },
                }"
                v-for="item in $store.getters.itemTest"
                :key="item.productId"
                :product="item"
            >
                <BaseItem :product="item" />
            </router-link>
        </div>
        <!-- </div> -->
        <!-- </div> -->

        <!-- <div v-else class="h-screen w-full flex items-center justify-center select-none">
            <i class="material-icons text-4xl animate-spin" v-show="isLoad"> autorenew </i>
            <div class="text-4xl font-mono tracking-wide font-bold" v-show="!isLoad">Product Out</div>
        </div> -->
    </div>
</template>

<script>
import BaseItem from "../components/BaseItem.vue";
export default {
    components: {
        BaseItem,
    },
    data() {
        return {};
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
