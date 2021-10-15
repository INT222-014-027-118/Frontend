<template>
    <div class="flex flex-col rounded-md shadow-md ring-2 ring-transparent hover:ring-primary cursor-pointer transition">
        <div class="overflow-hidden w-full relative pb-40 sm:pb-44 md:pb-48 lg:pb-56 select-none">
            <img :src="image" class="absolute h-full w-full object-contain object-center select-none rounded-t-md bg-white" alt="Product image" />
        </div>
        <div class="z-10 p-3 bg-white dark:bg-dark_tertiary rounded-b-md relative">
            <p class="h-9 font-normal text-sm mb-2 overflow-hidden overflow-ellipsis leading-tight" :class="product.productName == '' ? 'text-black text-opacity-40' : ''">
                {{ product.productName == "" ? "Product name is not defined" : product.productName }}
            </p>
            <div class="bg-primary text-white px-3 font-light text-xs rounded-sm absolute sm:bottom-10">Discount 99%</div>
            <div class="text-xl mt-6 flex flex-col sm:flex-row justify-between sm:items-center">
                <span class="text-red-500 font-bold">฿ {{ product.price }}</span>
                <!-- <span class="text-xs" v-if="product.quantityStock < 10 ">{{ product.quantityStock }}</span> -->
                <span class="text-xs md:text-sm opacity-70 capitalize">{{ stockCheck }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: "",
            hoverEditer: false,
            btnEditer: false,
        };
    },
    props: {
        product: Object,
    },
    methods: {
        editItem() {},

        deleteItem() {},
    },
    computed: {
        stockCheck() {
            if (this.product.quantityStock == 0) {
                return "out of stock";
            } else if (this.product.quantityStock < 10) {
                return `low stock (${this.product.quantityStock})`;
            } else {
                return "in stock";
            }
        },
    },
    async created() {
        this.image = await `http://52.187.10.17/orange-it/image/get/${this.product.images[0].source}`;
    },
};
</script>

<style>
.text-overflow-handle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
