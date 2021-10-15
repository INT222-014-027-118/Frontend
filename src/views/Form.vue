<template>
    <div class="py-5" v-show="isLoad">
        <form @submit.prevent="submitForm" class="px-2 py-8 mx-auto bg-white rounded shadow-md dark:bg-gray-700 max-w-7xl sm:px-6">
            <div class="mx-auto sm:max-w-5xl">
                <div class="px-3 mb-6 md:mb-0">
                    <label class="label-css" for="grid-state">Category *</label>
                    <div class="input-css">
                        <div class="w-full flex text-xs p-2">
                            <p class="w-1/3">category</p>
                            <p class="w-1/3">sub category</p>
                        </div>
                        <div class="bg-white w-full shadow-md flex mb-5 rounded-md h-40 overflow-y-auto">
                            <div class="flex flex-col bg-white w-1/3 p-1 border-r-2">
                                <div
                                    class="px-2 py-1 cursor-pointer hover:bg-yellow-200 hover:text-black rounded-sm"
                                    :class="[selectRootCat.category === category.category ? 'bg-primary text-white hover:bg-primaryfocus hover:text-white' : '']"
                                    v-for="category in $store.getters.rootCategories"
                                    :key="category.id"
                                    @click="chooseRootCategory(category)"
                                >
                                    {{ category.category }}
                                </div>
                            </div>
                            <div class="flex flex-col bg-white w-1/3 p-1 border-r-2">
                                <div
                                    class="px-2 py-1 cursor-pointer hover:bg-yellow-200 hover:text-black rounded-sm"
                                    :class="[selectChildCat.category === childcat.category ? 'bg-primary text-white hover:bg-primaryfocus hover:text-white' : '']"
                                    v-for="childcat in $store.getters.childCategories(`${this.selectRootCat.id}`)"
                                    :key="childcat.id"
                                    @click="chooseSubCategory(childcat)"
                                >
                                    {{ childcat.category }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="brand">Brand *</label>
                    <select class="input-css" id="brandName" v-model="product.brandName" :class="{ 'ring ring-red-400': invalid.brand }">
                        <option value="" disabled selected>[ Select Brand ]</option>

                        <option v-for="brand in $store.getters.brands" :key="brand" :value="brand" class="text-lg">{{ brand }}</option>
                    </select>
                    <span v-if="invalid.brand" class="absolute font-mono text-sm text-red-500 transform select-none -bottom-3 left-3 sm:bottom-2 sm:left-1/2 sm:-translate-x-1/2"
                        >Please select Brand</span
                    >
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <div class="flex justify-between">
                        <label class="label-css" for="" ref="name">Product Name *</label>
                        <p class="label-css">{{ countText }}/40</p>
                    </div>
                    <input
                        v-model="product.productName"
                        class="input-css"
                        id=""
                        type="text"
                        placeholder="Please input name 40 characters"
                        maxlength="40"
                        :class="{ 'ring ring-red-400': invalid.name }"
                    />
                    <span v-if="invalid.name" class="absolute font-mono text-sm text-red-500 transform select-none -bottom-3 left-3 sm:bottom-2 sm:left-1/2 sm:-translate-x-1/2"
                        >Please input product name</span
                    >
                </div>

                <div class="flex flex-col md:flex-row lg:w-full">
                    <div class="relative px-3 mb-6 md:w-1/2 md:mb-0">
                        <label class="label-css" for="price">Price *</label>
                        <input
                            v-model.number="product.price"
                            step="0.01"
                            class="input-css"
                            id="price"
                            type="number"
                            placeholder=""
                            min="1"
                            max="99999"
                            :class="{ 'ring ring-red-400': invalid.price }"
                        />
                        <span v-if="invalid.price" class="absolute font-mono text-sm text-red-500 select-none -bottom-3 left-8 sm:bottom-2">Please input Price</span>
                    </div>

                    <div class="relative px-3 mb-6 md:w-1/2 md:mb-0">
                        <label class="label-css" for="stock">quantity stock *</label>
                        <input
                            v-model.number="product.quantityStock"
                            step="1"
                            class="input-css"
                            id="stock"
                            type="number"
                            placeholder=""
                            min="1"
                            max="9999"
                            :class="{ 'ring ring-red-400': invalid.quantityStock }"
                        />
                        <span v-if="invalid.quantityStock" class="absolute font-mono text-sm text-red-500 select-none -bottom-3 left-8 sm:bottom-2">Please input Price</span>
                    </div>
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="description">Description</label>
                    <textarea class="h-40 input-css" id="description" v-model="product.description" type="text" placeholder="Please enter text up to 1000 characters." maxlength="500" />
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css">color *</label>
                    <div class="input-css flex flex-wrap" :class="{ 'ring ring-red-400': invalid.Color }">
                        <label :for="color.id" v-for="color in $store.getters.colors" :key="color.id" class="flex flex-col items-center cursor-pointer">
                            <input
                                :id="color.id"
                                type="checkbox"
                                name="color"
                                class="w-8 h-8 my-2 mx-5 cursor-pointer rounded-full border-1 form-checkbox ring-transparent ring-4 ring-offset-2 focus:ring-offset-2 focus:ring-secondary active:ring-secondary checked:ring-primary"
                                :style="{
                                    backgroundColor: `#${color.hexCode}`,
                                }"
                                :value="color"
                                v-model="product.colors"
                            />
                            <span :class="[color.id == this.product.colors.id ? 'text-red-600' : '']">{{ color.label }}</span>
                        </label>
                    </div>
                    <span v-if="invalid.Color" class="absolute font-mono text-sm text-red-500 transform select-none -bottom-6 left-3 sm:-bottom-1 sm:left-1/2 sm:-translate-x-1/2"
                        >Please select product color</span
                    >
                </div>

                <div class="px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css">Upload Image</label>
                    <div class="relative input-css flex flex-wrap select-none overflow-hidden">
                        <div v-for="(item, index) in preview_list" :key="index" class="m-2 md:m-5 relative">
                            <div class="bg-white h-40 w-40 md:h-64 md:w-64 mb-2 rounded-md">
                                <img :src="item" class="object-contain object-center w-full h-full rounded-md" />
                            </div>
                            <p class="text-sm font-light">file name: {{ imageInfo[index].name }}</p>
                            <p class="text-sm font-light">size: {{ imageInfo[index].size / 1024 }}KB</p>
                            <div
                                @click="deleteImg(index)"
                                class="bg-red-600 absolute text-center pt-0.5 cursor-pointer -top-3 right-3 md:-right-3 text-base md:text-xl rounded-full h-7 w-7 md:h-8 md:w-8 material-icons text-white"
                            >
                                delete_forever
                            </div>
                        </div>
                        <div class="self-start m-2 md:m-5" v-show="preview_list.length < 6">
                            <label
                                class="h-40 w-40 md:h-64 md:w-64 flex flex-col items-center px-4 justify-center bg-white text-blue rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer transition hover:bg-primary hover:text-white"
                                form="file"
                            >
                                <span class="material-icons p-0.5 rounded-full border-2 border-current">
                                    add
                                </span>
                                <span class="mt-2 text-base ">Select a file</span>
                                <input type="file" class="hidden" id="file" accept="image/x-png,image/gif,image/jpeg" @change="previewMultiImage" />
                            </label>
                        </div>
                    </div>
                </div>

                <div class="px-3 mb-6 lg:w-full md:mb-0 rounded-md">
                    <div class="input-css ">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th class="w-5/12">Key</th>
                                    <th class="w-5/12">Value</th>
                                    <th class="w-2/12"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="pb-5"><RichSelect @selected="selected" /></td>
                                    <td class="pb-5">
                                        <input
                                            type="text"
                                            placeholder="value"
                                            v-model="attributeText"
                                            class="block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed text-black placeholder-gray-400 bg-white border-gray-300 "
                                        />
                                    </td>
                                    <td class="pb-5">
                                        <button
                                            type="button"
                                            class="bg-green-600 text-white select-none block px-3 py-2 text-center w-full rounded hover:shadow-md hover:bg-green-700 cursor-pointer"
                                            @click="Addattribute"
                                        >
                                            Add
                                        </button>
                                    </td>
                                </tr>
                                <tr v-show="1 !== 0">
                                    <td colspan="3" class="font-semibold p-2">Attributes list</td>
                                </tr>
                                <tr v-for="(spec, index) in product.attributes" :key="spec.key" :class="index % 2 == 0 ? 'bg-white' : 'bg-gray-50'" class="border">
                                    <td class="">
                                        <p class="px-3 py-2">{{ spec.key }}</p>
                                    </td>
                                    <td class="">
                                        <p class="px-3 py-2">{{ spec.textValue }}</p>
                                    </td>
                                    <td class="p-1">
                                        <button
                                            type="button"
                                            class="bg-red-500 text-white select-none block px-3 py-2 text-center w-full rounded hover:shadow-md hover:bg-red-600 cursor-pointer"
                                            @click="removeAddattribute(index)"
                                        >
                                            remove
                                        </button>
                                    </td>
                                </tr>
                                <br />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button @click="validating" type="submit" class="self-end rounded shadow-md cursor-pointer btn">
                Add Product
            </button>
        </form>

        <!-- <router-link to="/tester" class="p-10 bg-red-500">tester</router-link> -->
    </div>
    <!-- <div v-show="isLoad" class="flex items-center justify-center w-full h-screen">
        <i class="text-4xl material-icons animate-spin" v-show="isLoad"> autorenew </i>
    </div> -->
</template>

<script>
import RichSelect from "../components/RichSelect.vue";
// import axios from "axios";

export default {
    components: {
        RichSelect,
    },
    data() {
        return {
            activeClose: true,
            productIds: [],

            attributeText: "",
            attributeSelect: "",

            selectRootCat: {},
            selectChildCat: {},

            product: {
                id: 1,
                productName: "",
                description: "",
                price: 0,
                brandName: "",
                quantityStock: 0,
                discount: null,
                colors: [],
                specs: [],
                images: [],
                categories: [],
                productSpecValues: [],
            },

            invalid: {
                category: false,
                brand: false,
                name: false,
                price: false,
                Color: false,
                date: false,
                img: false,
            },

            isLoad: true,
            imageFile: null,

            preview_list: [],
            imageInfo: [],
        };
    },
    props: {
        itemId: String,
    },
    methods: {
        // validating() {
        //     this.invalid.category = this.product.categoryAdd === "" ? true | this.$refs.category.focus() : false;
        //     this.invalid.brand = this.product.brandName === "" ? true : false;
        //     this.invalid.name = this.product.name === "" ? true : false;
        //     this.invalid.price = this.product.price === 0 ? true : false;
        //     this.invalid.Color = this.product.colorsAdd.length === 0 ? true : false;
        //     this.invalid.date = this.product.launchDate === "" ? true : false;
        //     for (let prop in this.invalid) {
        //         setTimeout(() => {
        //             this.invalid[`${prop}`] = false;
        //         }, 5000);
        //     }
        // },
        generateNewId() {
            if (this.productIds.length > 0) {
                return (
                    this.productIds.sort((a, b) => {
                        if (a > b) return -1;
                        if (a < b) return 1;
                        return 0;
                    })[0] + 1
                );
            }
            return 1;
        },
        submitForm() {
            let imagesArray = this.imageInfo.map((image) => {
                return { id: 1, source: image.name, label: image.name.split(".")[0], product_id: 1 };
            });
            this.product.images = imagesArray;
            this.product.categories = [this.selectRootCat,this.selectChildCat];
            this.$store.dispatch("addProduct", this.product);
            this.$store.dispatch("uploadImages", this.imageInfo);
        },
        chooseRootCategory(category) {
            this.selectRootCat = category;
            this.selectChildCat = {};
        },
        chooseSubCategory(category) {
            this.selectChildCat = category;
        },
        selected(choosed) {
            this.attributeSelect = choosed;
        },
        Addattribute() {
            if (!this.attributeText == "" && !this.attributeSelect == "") {
                let spce = { key: this.attributeSelect, textValue: this.attributeText };
                this.product.attributes.push(spce);
                this.attributeText = "";
                this.attributeSelect = "";
            }
        },
        removeAddattribute(index) {
            this.product.attributes.splice(index, 1);
        },

        previewMultiImage(event) {
            let imgName = event.target.files[0].name;
            var input = event.target;
            var count = input.files.length;
            var index = 0;
            if (imgName.length > 20) {
                alert("The file name cannot exceed 20 characters.!!!");
            } else if (input.files) {
                while (count--) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.preview_list.push(e.target.result);
                    };
                    this.imageInfo.push(input.files[index]);
                    reader.readAsDataURL(input.files[index]);
                    index++;
                }
            }
        },

        deleteImg(index) {
            this.imageInfo.splice(index, 1);
            this.preview_list.splice(index, 1);
        },

        onFileChange(event) {
            this.imageFile = event.target.files[0];
            if (this.imageFile.name.length > 20) {
                alert("The file name cannot exceed 20 characters.!!!");
            } else {
                let files = event.target.files || event.dataTransfer.files;
                if (!files.length) return;
                this.createImage(files[0]);
                this.activeClose = true;
            }
        },
    },
    computed: {
        // isValid() {
        //     return this.brandName !== "" && this.name !== "" && this.price !== 0 && this.typeAdd !== "" && this.colorsAdd.length !== 0 && this.launchDate !== "";
        // },
        countText() {
            return this.product.productName.length;
        },
    },
    mounted() {
        this.$store.dispatch("loadDataForm");
    },
    created() {
        // await this.getDataToEdit();
    },
};
</script>

<style scoped>
.input-css {
    @apply w-full border border-gray-500 focus:outline-none rounded focus:bg-gray-50 dark:focus:bg-gray-500 py-3 px-5 md:px-10 mb-7 bg-gray-100 dark:bg-gray-600;
}

.label-css {
    @apply block uppercase tracking-wide text-xs font-bold mb-2;
}

.btn {
    @apply bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4;
}

[type="checkbox"]:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(236, 105, 7)' stroke-width='2%' stroke-linecap='round' stroke='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type="radio"]:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='red' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}
</style>
