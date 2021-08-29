<template>
    <div class="overflow-auto" v-show="showItem">
        <div class="mx-auto w-full h-full md:h-auto mt-0 md:mt-20 lg:mt-10 md:w-full lg:w-5/6 rounded-md bg-blue-100 dark:bg-gray-700 shadow-lg overflow-scroll md:overflow-hidden">
            <!-- <div
                class="fixed md:relative text-center md:text-left w-full mt-16 md:mt-0 bg-blue-300 dark:bg-blue-800 px-10 md:px-10 py-3 text-xl font-mono tracking-wider rounded-md flex flex-col md:flex-row justify-between items-center"
            >
                <div>
                    <span class="text-2xl font-bold text-center ">{{ type }} </span>
                    <span class="hidden md:inline-flex tracking-wider">: </span>
                    <p class="text-base md:text-xl line ">{{ product_name }}</p>
                </div>
                <div class="flex mt-4 md: md:m-0 text-lg">
                    <div class="flex items-center bg-green-600 md:px-5 md:py-3 mx-1 sm:mx-4 md:mx-3 px-4 py-2 hover:bg-green-700 cursor-pointer rounded-full text-white select-none" @click="editItem">
                        <span class="material-icons">edit</span>Edit
                    </div>
                    <div
                        class="flex items-center bg-red-600 md:px-5 md:py-3 mx-1 sm:mx-4 md:mx-3 px-4 py-2 hover:bg-red-700 md:mr-16 cursor-pointer rounded-full text-white select-none"
                        @click="deleteItem"
                    >
                        <span class="material-icons">delete</span>Delete
                    </div>
                    <span class="material-icons p-2 bg-white hover:bg-gray-300 text-black rounded-full cursor-pointer absolute top-3 md:top-1/4 right-5 -translate-y-1/2 select-none" @click="close"
                        >close</span
                    >
                </div>
            </div> -->

            <div class="md:mt-0 p-2 md:px-10 lg:mx-auto grid gap-3 grid-cols-1 md:grid-cols-2 md:w-full h-full lg:h-5/6">
                <div class="flex justify-center md:justify-start md:flex-col m-2 md:my-5 ">
                    <div class="flex justify-center items-center bg-white">
                        <img src="https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg" alt="" class="object-cover object-center md:max-h-96" />
                    </div>
                    <div class="flex flex-col md:flex-row items-center justify-center bg-gray-500 relative">
                        <div
                            class="w-7 h-7 m-2 text-center md:text-left rounded-md cursor-pointer flex items-center justify-center "
                            v-for="color in product.colors"
                            :key="color.colorId"
                            :style="{ backgroundColor: color.hexColor }"
                            @mouseover="showTextColor(`${color.colorName}  ${color.hexColor}`)"
                            @mouseleave="showTextColor('')"
                        ></div>
                        <div v-show="showText" class="absolute bottom-3 right-12 md:-top-11 md:right-auto md:bottom-auto text-black">
                            <div class="bg-gray-500 text-white rounded-md px-3 py-2 opacity-80">{{ showText }}</div>
                        </div>
                    </div>
                </div>

                <div class="pb-8 sm:py-5 sm:px-5 ">
                    <p class="px-2 py-3 text-2xl border-b border-black dark:border-gray-100 mb-3">{{ product_name }}</p>
                    <div class="px-0 sm:px-3">
                        <div class="flex md:justify-between flex-col md:flex-row md:items-center py-2 text-left">
                            <span class="text-sm font-light px-2">type : {{ type }}</span>
                            <span class="text-sm font-light px-2">Launch Date : {{ product.launchDate }}</span>
                        </div>
                        <div class="flex justify-between items-center mb-5">
                            <span class="text-md font-light px-2">Warranty : {{ product.warranty == 0 ? "none" : product.warranty + " year" }}</span>
                            <span class="text-2xl text-red-500 font-bold px-2">฿ {{ product.price }}</span>
                        </div>
                        <p class="font-light tracking-wide px-3">{{ product.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    components: {},
    props: {
        type: String,
        productId: String,
        product_name: String,
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
        //     this.typeName = this.product.type.typeName;
        //     this.image = `${this.url}/image/get/${this.productPassing.imageUrl}`;
        // }
    },
};
</script>
