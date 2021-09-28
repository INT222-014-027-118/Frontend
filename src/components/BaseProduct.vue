<template>
    <div class="flex flex-col rounded-md shadow-md ring-2 ring-transparent hover:ring-primary cursor-pointer transition">
        <div class="overflow-hidden w-full relative pb-32 sm:pb-40 md:pb-44 lg:pb-44 select-none">
            <img
                src="https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg"
                class="absolute h-full w-full object-cover object-center select-none rounded-t-md dark:bg-gray-400 "
                alt="Product image"
            />
        </div>
        <div class="z-10 p-3 bg-white dark:bg-gray-600 rounded-b-md relative">
            <p class="h-9 font-normal text-sm mb-2 overflow-hidden overflow-ellipsis leading-tight">
                {{ product.productName }}
            </p>
            <div class="bg-primary text-white px-3 inline-block font-light text-xs rounded-sm absolute bottom-10">Discount 99%</div>
            <div class="text-xl mt-6 flex justify-between items-center">
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
            } else if (this.product.quantityStock < 20) {
                return "low stock";
            } else {
                return "in stock";
            }
        },
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
