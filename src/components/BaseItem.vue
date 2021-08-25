<template>
    <div class="flex flex-col rounded-lg shadow-xl">
        <div class="overflow-hidden w-full relative pb-72 select-none">
            <div v-show="btnEditer" class="flex space-x-2 sm:space-x-8 absolute z-10 top-1/4 right-1/2 transform translate-x-2/4 translate-y-1/2 font-mono">
                <div class="bg-green-500 hover:bg-green-700  py-2 px-4 md:py-4 md:px-5 cursor-pointer rounded-full text-white shadow-2xl flex items-center" @click="editItem">
                    <span class="material-icons text-4xl">edit</span>Edit
                </div>
                <div class="bg-red-600 hover:bg-red-700 py-2 px-4 md:py-4 md:px-5 cursor-pointer rounded-full text-white shadow-2xl flex items-center" @click="deleteItem">
                    <span class="material-icons text-4xl">delete</span>Delete
                </div>
            </div>
            <div>
                <div
                    class="material-icons items-center bg-gray-500 py-2 px-3 cursor-pointer absolute z-10 top-2 right-2 rounded-md text-white shadow-2xl"
                    v-show="!btnEditer"
                    @click="btnEditer = !btnEditer"
                >
                    more_horiz
                </div>
                <div
                    class="material-icons items-center bg-gray-600 py-2 px-3 cursor-pointer absolute z-10 top-2 right-2 rounded-md text-white shadow-2xl"
                    v-show="btnEditer"
                    @click="btnEditer = !btnEditer"
                >
                    close
                </div>
            </div>
            <img
                :src="image"
                class="absolute h-full w-full object-cover object-center px-1 pt-1 select-none rounded-t-md dark:bg-gray-400 "
                alt="Product image"
                :class="[btnEditer ? ' opacity-50' : 'bg-white']"
            />
            <div class="absolute -mt-4 w-full p-1 bottom-0 bg-gray-700 opacity-60 h-8" />
            <div class="absolute -mt-4 w-full p-1 bottom-0">
                <div class="flex flex-row-reverse">
                    <div
                        class="w-4 h-4 m-1 rounded-md"
                        v-for="color in product.colors"
                        :key="color.colorId"
                        :style="{
                            backgroundColor: color.hexColor,
                        }"
                    ></div>
                </div>
            </div>
        </div>
        <div class="z-10 w-full relative">
            <div class="pt-4 pb-8 px-5 bg-blue-200 dark:bg-gray-600 rounded-b-md">
                <h1 class="font-bold text-lg underline sm:no-underline h-14">
                    product.productName 
                </h1>
                <div class="flex items-center justify-between">
                    <!-- <div class="text-sm font-light text-black dark:text-white">
                        <p>Warranty : {{ product.warranty == 0 ? "none" : product.warranty + " year" }}</p>
                    </div> -->
                    <div class="text-2xl text-red-500 font-bold">฿ {{ product.price }}</div>
                </div>
                <!-- <div class="h-20 p-2 overflow-hidden text-black dark:text-white relative leading-relaxed">
                    {{ product.description }}
                    <div class="absolute z-10 bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-200 dark:from-gray-600 pointer-events-none"></div>
                </div> -->
            </div>
            <div class="absolute right-1/2 transform underline translate-x-1/2 bottom-1 z-10">
                Show More
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
            // url:'http://137.116.145.41:9091'
        };
    },
    props: {
        product: Object,
    },
    methods: {
        editItem() {},

        deleteItem() {},
    },
};
</script>

<style></style>
