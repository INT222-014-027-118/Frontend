<template>
    <div class="" v-if="showItem">
        <div class="mx-auto max-w-7xl sm:mt-5 dark:bg-gray-700">
            <div class="md:mt-0 md:px-5 lg:mx-auto grid gap-3 grid-cols-3 ">
                <div class="py-0 lg:py-5 mx-0 col-span-3 lg:col-span-2">
                    <Carousel />
                </div>

                <div class="px-1 py-5 sm:px-16 md:px-20 lg:p-5 col-span-3 lg:col-span-1 my-5 bg-white rounded-md shadow-md">
                    <p class="px-2 text-primary">
                        Brand : <span class="text-sm font-light">{{ $store.getters.itemTest[3].type }}</span>
                    </p>
                    <p class="px-2 py-3 border-b border-black text-2xl font-semibold dark:border-gray-100 mb-2">{{ product_name }}</p>
                    <div class="px-2 sm:px-3 space-y-3 lg:space-y-3">
                        <p class="text-2xl text-red-500 font-bold">฿ {{ price }}</p>
                        <p class="text-sm font-light">Product ID: 1740013000002 (91400)</p>
                        <p class="text-md font-light">Warranty : {{ product.warranty == 0 ? "none" : product.warranty + " year" }}</p>
                        <div class="bg-secondary text-white px-4 py-1 inline-block text-xs rounded-sm">Discount 99%</div>
                        <div class="w-full">
                            <p class="text-sm">color</p>
                            <div class="w-full flex">
                                <input
                                    type="radio"
                                    name="color"
                                    class="w-8 h-8 m-2 border-1 rounded-full form-input ring-transparent ring-4 ring-offset-2 focus:ring-4 focus:ring-offset-2 active:ring-secondary checked:ring-primary"
                                    v-for="(color, index) in $store.getters.itemTest[2].colors"
                                    :key="color.colorId"
                                    :style="{
                                        backgroundColor: color.hexColor,
                                    }"
                                    :value="color.hexColor"
                                    v-model="colorPick"
                                    @click="selectColor(index)"
                                />
                                <!-- <p class="bg-gray-300 absolute">pick:{{ colorPick }}</p> -->
                            </div>
                        </div>

                        <button
                            class="bg-primary text-white select-none block py-3 px-4 text-center w-full rounded-md hover:shadow-md hover:bg-secondary cursor-pointer fixed sm:static bottom-12 left-0 z-40"
                            @click="addCartItem()"
                        >
                            Add to Cart
                        </button>
                        <div class="text-xl text-green-600 font-bold flex items-center"><span class="material-icons"> check_circle_outline </span> In stork</div>
                    </div>
                </div>

                <div class="my-5 w-full col-span-3">
                    <div class="p-1 sm:px-16 md:px-20 lg:px-5">
                        <p class="font-semibold text-xl px-2">Attribute: {{ product_name }}</p>
                        <div class="overflow-hidden rounded p-1">
                            <table class="min-w-full bg-white">
                                <tbody class="text-gray-700">
                                    <tr :class="attribute % 2 == 0 ? 'bg-gray-100' : 'bg-gray-50'" v-for="attribute in [0, 1, 2, 3, 4]" :key="attribute">
                                        <td class="w-1/3 text-left py-3 px-4">title</td>
                                        <td class="w-1/3 text-left py-3 px-4">Smith</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="p-1 mb-5 w-full col-span-3 sm:px-16 md:px-20 lg:px-5">
                    <p class="font-semibold text-xl px-2">Rating: {{ product_name }}</p>
                    <Raring />
                </div>
                <Review class="col-span-3 lg:col-span-1 p-1 sm:px-16 md:px-20 lg:px-5 mb-5" />
                <div class="col-span-3 lg:col-span-2 sm:px-16 md:px-20 lg:px-5 my-6">
                    <!-- <p class="font-semibold text-xl">Customer reviews</p> -->
                    <Comments />
                    <Comments />
                    <Comments />
                </div>
            </div>
        </div>
        <Loading v-show="loading" />
    </div>
</template>

<script>
import Review from "../components/Review.vue";
import Comments from "../components/Comment.vue";
import Raring from "../components/Rating.vue";
export default {
    name: "Item",
    components: {
        // Carousel,
        Review,
        Comments,
        Raring,
    },
    props: {
        type: String,
        product_name: String,
        price: String,
    },
    data() {
        return {
            showItem: true,
            // url: `http://137.116.145.41:9091`,
            showText: "",
            product: [],
            reviews: {
                totalCount: 123,
                average: 4,
            },
            colorPick: "",
            loading: false,
        };
    },
    methods: {
        selectColor(index) {
            console.log(index);
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        addCartItem() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.$swal({
                    title:
                        "<div class='flex items-center justify-center text-primary'><span class='material-icons pt-1 px-1 text-3xl'> shopping_cart </span><span class='font-bold text-2xl'>Shopping Cart</span></div>",
                    text: "The item has been added to your shopping cart",
                    showCloseButton: true,
                    confirmButtonColor: "#EC6907",
                    backdrop: "rgba(75, 85, 99, 0.4)",
                    willOpen: () => {
                        // this.$swal.showLoading();
                        setTimeout(() => {
                            let itemDumy = {
                                name: this.product_name,
                                price: this.price,
                                quantity: 1,
                            };
                            this.$store.dispatch("addCartItem", itemDumy);
                        }, 500);
                    },
                });
            }, 500);
        },
        showAlert() {
            // Use sweetalert2
            // this.$swal({
            //     title:
            //         "<div class='flex items-center justify-center text-primary'><span class='material-icons pt-1 px-1 text-3xl'> shopping_cart </span><span class='font-bold text-2xl'>Shopping Cart</span></div>",
            //     text: "The item has been added to your shopping cart",
            //     showCancelButton: true,
            //     showCloseButton: true,
            //     willOpen: () => {
            //         this.$swal.showLoading();
            //         setTimeout(() => {
            //             this.$swal.hideLoading();
            //         }, 500);
            //     },
            // });
        },
    },
    mounted() {
        this.scrollToTop();
    },
};
</script>
