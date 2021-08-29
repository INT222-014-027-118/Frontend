<template>
    <div class="h-full mx-auto">
        <Carousel />
        <!-- <div class="" v-if="brandsObjs.length > 0"> -->
        <!-- <div class="h-full items-center mx-auto max-w-6xl bg-blue-100 dark:bg-gray-700 rounded-md mb-8 relative" v-for="brand in brandsObjs" :key="brand.brand"> -->

        <div class="container lg:max-w-6xl p-5 mx-auto grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <router-link
                :to="{
                    name: 'Product',
                    params: { product_name: item.name, type: item.type, productId: item.productId, price: item.price }
                }"
                v-for="(item) in $store.getters.itemTest"
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
import Carousel from "../components/Carousel.vue";
import BaseItem from "../components/BaseItem.vue";
export default {
    components: {
        Carousel,
        BaseItem,
    },
    data() {
        return {};
    },
    methods: {},
};
</script>

<style></style>
