<template>
    <div class="container flex py-11 lg:px-0 lg:py-5 mx-auto lg:max-w-7xl">
        <div class="lg:w-3/12 relative">
            <div class="absolute left-0 z-30 w-3/12 lg:bg-transparent">
                <div class="fixed left-2 top-12 sm:top-20 lg:hidden">
                    <button class="p-2 bg-white rounded-md shadow-md select-none cursor-pointer flex items-center" @click="showFilter = !showFilter">
                        <span class="text-black material-icons">filter_list</span>
                        <span class="text-black px-2 capitalize">fliter</span>
                    </button>
                </div>
                <div class="fixed left-2 lg:left-auto px-3 pb-3 bg-white rounded-md shadow-2xl lg:shadow-md select-none w-full lg:w-3/12 max-w-xs" :class="[{ hidden: showFilter }, 'lg:block']">
                    <div class="border-b-2 ">
                        <div class="flex items-center justify-between py-3 text-gray-600 cursor-pointer hover:text-black" @click="showCat = !showCat">
                            <span class="font-semibold">Category</span> <span class="text-base font-bold">+</span>
                        </div>
                        <div class="p-1 mb-3 space-y-2 rounded-md bg-gray-50" v-show="showCat">
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="headphone" /> headphone</label
                            >
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="speaker" /> speaker</label
                            >
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="keyboard" /> keyboard</label
                            >
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="mouse" /> mouse</label
                            >
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="computers" /> computers</label
                            >
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="gaming gear" /> gaming gear</label
                            >
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="smart gadget" /> smart gadget</label
                            >
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="moblie accessories" /> moblie accessories</label
                            >
                        </div>
                    </div>
                    <div class="border-b-2">
                        <div class="flex items-center justify-between py-3 text-gray-600 cursor-pointer hover:text-black" @click="showType = !showType">
                            <span class="font-semibold">Type</span> <span class="text-base font-bold">+</span>
                        </div>
                        <div class="p-1 mb-3 space-y-2 rounded-md bg-gray-50" v-show="showType">
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="" />
                            </label>
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="" />
                            </label>
                            <label id="" class="flex items-center px-2 py-1 rounded-md hover:bg-gray-200"
                                ><input type="checkbox" class="mr-4 rounded-md form-checkbox" v-model="categorysName" value="" />
                            </label>
                        </div>
                    </div>
                    <div class="border-b-2">
                        <div class="flex items-center justify-between py-3 text-gray-600 cursor-pointer hover:text-black" @click="showPrice = !showPrice">
                            <span class="font-semibold">Price</span> <span class="text-base font-bold">+</span>
                        </div>
                        <div class="p-1 mb-3 rounded-md bg-gray-50 flex w-full" v-show="showPrice">
                            <label for="" class="flex flex-col items-center w-1/2 mx-1 font-thin">
                                min
                                <input type="number" class="px-1 pb-0.5 w-full h-8 ring-1 ring-inset ring-primary focus:outline-none rounded-md" />
                            </label>
                            <div class="self-end py-1">-</div>
                            <label for="" class="flex flex-col items-center w-1/2 mx-1 font-thin">
                                max
                                <input type="number" class="px-1 pb-0.5 w-full h-8 ring-1 ring-inset ring-primary focus:outline-none rounded-md" />
                            </label>

                            <button type="button" class="py-1 px-2 h-8 w-3/12 self-end bg-primary hover:bg-primaryfocus rounded-md text-white">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-9/12 pr-2 pl-2 sm:pl-2 lg:pr-1 grid gap-1 md:gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 col-span-4">
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
export default {
    data() {
        return {
            showFilter: true,
            showCat: false,
            showType: false,
            showPrice: false,
            categorysName: [],
        };
    },
    props: {
        categoryName: String,
    },
    created() {
        this.categorysName.push(this.categoryName);
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
    mounted() {
        this.$store.dispatch("loadProductsByCategory",this.categoryName);
    },
};
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
