<template>
    <div class="flex flex-col rounded-md shadow-md ring-2 ring-transparent hover:ring-primary cursor-pointer transition">
        <div class="overflow-hidden w-full relative pb-32 sm:pb-40 md:pb-44 lg:pb-44 select-none">
            <!-- <div v-show="btnEditer" class="flex absolute z-10 top-1/4 right-1/2 transform translate-x-2/4 translate-y-1/2">
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
            </div> -->
            <img
                src="https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg"
                class="absolute h-full w-full object-cover object-center select-none rounded-t-md dark:bg-gray-400 "
                alt="Product image"
                :class="[btnEditer ? ' opacity-50' : 'bg-white']"
            />
            <!-- <div class="absolute w-full p-1 -bottom-1 sm:bottom-0 bg-white opacity-30 h-6 sm:h-8" />
            <div class="absolute w-full p-1 -bottom-1 sm:bottom-0">
                <div class="flex flex-row-reverse">
                    <div
                        class="w-3 h-3 sm:w-4 sm:h-4 m-1 rounded-full"
                        v-for="color in product.colors"
                        :key="color.colorId"
                        :style="{
                            backgroundColor: color.hexColor,
                        }"
                    ></div>
                </div>
            </div> -->
        </div>
        <div class="z-10 p-3 bg-white dark:bg-gray-600 rounded-b-md relative">
            <p class="h-10 font-normal text-sm mb-2 overflow-hidden overflow-ellipsis leading-tight">
                <span class="uppercase"> {{ product.brand }} :</span>
                {{ product.name }}
            </p>
            <div class="bg-primary text-white px-3 inline-block font-light text-xs rounded-sm absolute bottom-10">Discount 99%</div>
            <div class="text-xl text-red-500 font-bold mt-4">฿ {{ product.price }}</div>
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

<style>
.text-overflow-handle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
