<template>
    <div class="overflow-auto" v-show="showItem">
        <div class="mx-auto max-w-7xl md:h-auto sm:mt-5 lg:w-5/6 rounded-md bg-white dark:bg-gray-700 shadow-lg overflow-hidden">
            <div class="md:mt-0 md:px-10 lg:mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 md:w-full h-full lg:h-5/6">
                <div class="py-0 sm:py-5">
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

                <div class="p-1 md:p-3 lg:p-5 ">
                    <p class="px-2 text-primary">Brand</p>
                    <p class="px-2 py- text-2xl border-b border-black dark:border-gray-100 mb-2">{{ product_name }}</p>
                    <div class="px-2 sm:px-3 sm:space-y-1 lg:space-y-3">
                        <p class="">Reviews</p>
                        <div class="flex items-center">
                            <div class="flex items-center">
                                <span
                                    class="material-icons mb-1"
                                    v-for="rating in [0, 1, 2, 3, 4]"
                                    :key="rating"
                                    :class="[reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                    aria-hidden="true"
                                >
                                    star
                                </span>
                            </div>
                            <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                            <a href="reviews.href" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{ reviews.totalCount }} reviews</a>
                        </div>

                        <p class="text-sm font-light">Product ID: 1740013000002 (91400)</p>
                        <p class="text-sm font-light">type : {{  $store.getters.itemTest[3].type }}</p>
                        <!-- </div> -->
                        <!-- <div class="flex md:justify-between md:items-center flex-col md:flex-row text-left"> -->
                        <p class="text-md font-light">Warranty : {{ product.warranty == 0 ? "none" : product.warranty + " year" }}</p>
                        <p class="text-2xl text-red-500 font-bold">฿ {{ price }}</p>
                        <div class="bg-secondary text-white px-4 py-1 inline-block text-xs rounded-sm">Discount 99%</div>
                        <div class="w-full">
                            <p class="text-sm font-light">color {{ type }}</p>
                            <div class="w-full">
                                <div class="flex">
                                    <div
                                        class="w-7 h-7 m-1 rounded-full"
                                        v-for="color in $store.getters.itemTest[3].colors"
                                        :key="color.colorId"
                                        :style="{
                                            backgroundColor: color.hexColor,
                                        }"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <p class="text-2xl text-green-600 font-bold">✔ In stork</p>
                        <button class="bg-primary text-white block py-3 px-4 text-center w-full rounded-md hover:shadow-lg focus:bg-secondary cursor-pointer">Add to Cart</button>
                    </div>
                </div>
                <div class="md:px-32 py-5 w-full sm:col-span-2">
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
            </div>
        </div>
    </div>
</template>

<script>
// import Carousel from "../components/Carousel.vue";

export default {
    name: "Item",
    components: {
        // Carousel
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
};
</script>
