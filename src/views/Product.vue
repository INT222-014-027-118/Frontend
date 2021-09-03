<template>
    <div class="overflow-auto" v-show="showItem">
        <div class="mx-auto max-w-7xl sm:mt-5 rounded-md bg-white dark:bg-gray-700 shadow-lg">
            <div class="md:mt-0 md:px-10 lg:mx-auto grid gap-3 grid-cols-3 ">
                <div class="py-0 lg:py-5 col-span-3 lg:col-span-2">
                    <div class="my-auto ">
                        <Carousel2 />
                    </div>
                    <!-- <div class="flex flex-row items-center justify-center bg-gray-500 relative">
                        <div
                            class="w-7 h-7 m-2 text-center md:text-left rounded-md cursor-pointer flex items-center justify-center "
                            v-for="color in $store.getters.itemTest[2].colors"
                            :key="color.colorId"
                            :style="{ backgroundColor: color.hexColor }"
                            @mouseover="showTextColor(`${color.colorName}  ${color.hexColor}`)"
                            @mouseleave="showTextColor('')"
                        ></div>
                        <div v-show="showText" class="absolute bottom-3 right-12 md:-top-11 md:right-auto md:bottom-auto text-black">
                            <div class="bg-gray-500 text-white rounded-md px-3 py-2 opacity-80">{{ showText }}</div>
                        </div>
                    </div> -->
                </div>

                <div class="p-1 md:px-20 lg:p-5 col-span-3 lg:col-span-1">
                    <p class="px-2 text-primary">
                        Brand : <span class="text-sm font-light">{{ $store.getters.itemTest[3].type }}</span>
                    </p>
                    <p class="px-2 py-3 text-2xl border-b border-black dark:border-gray-100 mb-2">{{ product_name }}</p>
                    <div class="px-2 sm:px-3 space-y-3 lg:space-y-2">
                        <p class="text-2xl text-red-500 font-bold">฿ {{ price }}</p>
                        <!-- <div>
                            <p class="text-sm py-1">Reviews</p>
                            <div class="flex items-center">
                                <div class="flex items-center">
                                    <span
                                        class="material-icons mb-1"
                                        v-for="rating in [0, 1, 2, 3, 4]"
                                        :key="rating"
                                        :class="[reviews.average > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                        aria-hidden="true"
                                    >
                                        star
                                    </span>
                                </div>
                                <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                                <a href="reviews.href" class="ml-3 text-sm font-medium text-primary hover:text-secondary">{{ reviews.totalCount }} reviews</a>
                            </div>
                        </div> -->

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
                                <p class="bg-gray-300 absolute">pick:{{ colorPick }}</p>
                            </div>
                        </div>
                        <div class="text-xl text-green-600 font-bold flex items-center"><span class="material-icons"> check_circle_outline </span> In stork</div>
                        <button class="bg-primary text-white block py-3 px-4 text-center w-full rounded-md hover:shadow-lg focus:bg-secondary cursor-pointer fixed sm:static bottom-12 left-0">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div class="md:px-24 lg:px-32 p-1 py-5 w-full col-span-3">
                    <p class="text-2xl py-1 px-2">Properties: {{ product_name }}</p>
                    <div class="shadow overflow-hidden rounded border-b border-gray-200">
                        <table class="min-w-full bg-white">
                            <tbody class="text-gray-700">
                                <tr :class="prop % 2 == 0 ? 'bg-gray-100' : 'bg-white'" v-for="prop in [0, 1, 2, 3, 4]" :key="prop">
                                    <td class="w-1/3 text-left py-3 px-4">title</td>
                                    <td class="w-1/3 text-left py-3 px-4">Smith</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Review class="col-span-3 lg:col-span-1" />
                <div class="col-span-3 lg:col-span-2">
                    <Comments class="" />
                    <Comments class="" />
                    <Comments class="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Carousel from "../components/Carousel.vue";
import Review from "../components/Review.vue";
import Comments from "../components/Comment.vue";
export default {
    name: "Item",
    components: {
        // Carousel,
        Review,
        Comments,
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
            marginTop: false,
            brandName: "",
            image: "",
            typeName: "",
            reviews: {
                totalCount: 123,
                average: 4,
            },
            colorPick: "",
        };
    },
    methods: {
        // close() {
        //     this.showItem = false;
        //     this.$router.push({
        //         name: "ProductsListTypes",
        //         params: { type: this.product.type.typeName },
        //     });
        // },
        selectColor(index) {
            console.log(index);
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        showTextColor(color) {
            this.showText = `${color}`;
        },
        deleteItem() {
            // let confirm = window.confirm("Are you sure?");
            // if (confirm) {
            //     fetch(`${this.url}/product/delete/${this.product.productId}`, { method: "DELETE" }).catch((error) => console.log(error));
            //     fetch(`${this.url}/image/delete/${this.product.imageUrl}`, { method: "DELETE" }).catch((error) => console.log(error));
            //     this.close();
            //     this.$emit("deleted-item", this.product);
            // }
        },
        editItem() {
            // this.$router.push({
            //     name: "FormEdit",
            //     params: { itemId: this.product.productId },
            // });
        },
        async getProduct() {
            // return fetch(`${this.url}/product/${this.productId}`)
            //     .then((res) => res.json())
            //     .then((data) => {
            //         this.product = data;
            //         this.brandName = data.brand.brandName;
            //         this.typeName = data.type.typeName;
            //     })
            //     .catch((error) => console.log(error));
        },
    },
    async created() {
        // if (typeof this.productPassing == "function") {
        //     await this.getProduct();
        //     this.image = `${this.url}/image/get/${this.product.imageUrl}`;
        // } else {
        //     this.product = this.productPassing;
        //     this.brandName = this.product.brand.brandName;
        // this.typeName = this.type
        //     this.image = `${this.url}/image/get/${this.productPassing.imageUrl}`;
        // }
    },
    mounted() {
        this.scrollToTop();
    },
};
</script>
