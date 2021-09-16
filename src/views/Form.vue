<template>
    <div class="py-5" v-show="isLoad">
        {{ product }}
        <form @submit.prevent="submitForm" class="px-2 py-8 mx-auto bg-white rounded shadow-md dark:bg-gray-700 max-w-7xl sm:px-6">
            <div class="mx-auto sm:max-w-5xl">
                <div class="px-3 mb-6 md:mb-0">
                    <label class="label-css" for="grid-state">Category *</label>
                    <div class="relative">
                        <select class="input-css" id="type" v-model="product.categoryAdd" ref="category" required :class="{ 'ring ring-red-400': invalid.category }">
                            <option value="" disabled selected>[ Select Category ]</option>
                            <option v-for="type in categorys" :key="type.id" :value="type.typeName">{{ type.typeName }}</option>
                            <optgroup label="Swedish Cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                            </optgroup>
                            <optgroup label="German Cars">
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </optgroup>
                        </select>
                        <span v-if="invalid.category" class="absolute font-mono text-sm text-red-500 select-none -bottom-3 left-8 sm:bottom-2">Please select type</span>
                    </div>
                </div>
                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="brand">Brand *</label>
                    <select class="input-css" id="brandAdd" v-model="product.brandAdd" required :class="{ 'ring ring-red-400': invalid.brand }">
                        <option value="" disabled selected>[ Select Brand ]</option>
                        <option value="test">test</option>

                        <option v-for="brand in brands" :key="brand.brandId" :value="brand.brandName" class="text-lg">{{ brand.brandName }}</option>
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
                        v-model="product.name"
                        class="input-css"
                        id=""
                        type="text"
                        placeholder="Please input name 40 characters"
                        maxlength="40"
                        required
                        :class="{ 'ring ring-red-400': invalid.name }"
                    />
                    <span v-if="invalid.name" class="absolute font-mono text-sm text-red-500 transform select-none -bottom-3 left-3 sm:bottom-2 sm:left-1/2 sm:-translate-x-1/2"
                        >Please input product name</span
                    >
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="price">Price *</label>
                    <input v-model="product.price" step="0.01" class="input-css" id="price" type="number" placeholder="" min="1" max="99999" required :class="{ 'ring ring-red-400': invalid.price }" />
                    <span v-if="invalid.price" class="absolute font-mono text-sm text-red-500 select-none -bottom-3 left-8 sm:bottom-2">Please input Price</span>
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="description">Description</label>
                    <textarea class="h-40 input-css" id="description" v-model="product.description" type="text" placeholder="Please enter text up to 500 characters." maxlength="500" />
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="previewImage">color *</label>
                    <div class="input-css" :class="{ 'ring ring-red-400': invalid.Color }">
                        <input
                            type="checkbox"
                            name="color"
                            class="w-8 h-8 m-2 rounded-full border-1 form-checkbox ring-transparent ring-4 ring-offset-2 focus:ring-4 focus:ring-offset-2 focus:ring-secondary active:ring-secondary checked:ring-primary"
                            v-for="color in $store.getters.itemTest[2].colors"
                            :key="color.colorId"
                            :style="{
                                backgroundColor: color.hexColor,
                            }"
                            required
                            :value="color.hexColor"
                            v-model="product.colorsAdd"
                        />
                    </div>
                    <span v-if="invalid.Color" class="absolute font-mono text-sm text-red-500 transform select-none -bottom-6 left-3 sm:-bottom-1 sm:left-1/2 sm:-translate-x-1/2"
                        >Please select product color</span
                    >
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="previewImage">Launch date *</label>
                    <input type="date" class="input-css" v-model="product.launchDate" required :class="{ 'ring ring-red-400': invalid.date }" />
                    <span v-if="invalid.date" class="absolute font-mono text-sm text-red-500 transform select-none -bottom-3 left-3 sm:bottom-2 sm:left-1/2 sm:-translate-x-1/2"
                        >Please input date</span
                    >
                </div>

                <div class="px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css">Warranty</label>
                    <div class="flex flex-col md:flex-row input-css">
                        <div class="flex items-center mr-7">
                            <input type="radio" id="0" name="warranty" v-model="product.warranty" value="0" class="w-4 h-5 mr-2" />
                            <label for="0">none</label>
                        </div>
                        <div class="flex items-center mr-7">
                            <input type="radio" id="1" name="warranty" v-model="product.warranty" value="1" class="w-4 h-5 mr-2" />
                            <label for="1">1 year</label>
                        </div>
                        <div class="flex items-center mr-7">
                            <input type="radio" id="2" name="warranty" v-model="product.warranty" value="2" class="w-4 h-5 mr-2" />
                            <label for="2">2 year</label>
                        </div>
                    </div>
                </div>

                <div class="px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css">Upload Image</label>
                    <div class="relative input-css flex flex-wrap select-none overflow-hidden">
                        <div v-for="(item, index) in preview_list" :key="index" class="m-5 relative">
                            <div class="bg-white h-40 w-40 md:h-64 md:w-64 mb-2 rounded-md">
                                <img :src="item" class="object-cover object-center w-full h-full rounded-md" />
                            </div>
                            <p class="text-sm font-light">file name: {{ imageInfo[index].name }}</p>
                            <p class="text-sm font-light">size: {{ imageInfo[index].size / 1024 }}KB</p>
                            <div @click="deleteImg(index)" class="bg-red-600 absolute text-center pt-0.5  cursor-pointer -top-3 -right-3 text-base md:text-xl rounded-full h-7 w-7 md:h-8 md:w-8 material-icons text-white">
                                delete_forever
                            </div>
                        </div>
                        <div class="self-start m-5" v-show="preview_list.length < 6">
                            <label
                                class="md:h-64 md:w-64 flex flex-col items-center px-4 justify-center bg-white text-blue rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer transition hover:bg-primary hover:text-white"
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

                <div class="container w-full mx-auto px-2 bg-gray-400 ">
                    <table>
                        <thead>
                            <tr>
                                <th>title</th>
                                <th>title</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>att</td>
                                <td>att</td>
                            </tr>
                            <tr>
                                <td>Donna Snider</td>
                                <td>Customer Support</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button @click="validating" type="submit" class="self-end rounded shadow-md cursor-pointer btn">
                Add Product
            </button>
        </form>
    </div>
    <!-- <div v-show="isLoad" class="flex items-center justify-center w-full h-screen">
        <i class="text-4xl material-icons animate-spin" v-show="isLoad"> autorenew </i>
    </div> -->
</template>

<script>
export default {
    data() {
        return {
            brands: [],
            colors: [],
            categorys: [],
            // url: "http://137.116.145.41/refun",
            // previewImage: null,
            activeClose: true,
            productIds: [],
            product: {
                categoryAdd: "",
                brandAdd: "",
                colorsAdd: [],
                name: "",
                price: 0,
                warranty: 0,
                launchDate: "",
                description: "",
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
            oldImage: { image: "", useThis: Boolean },

            previewImage: null,

            preview_list: [],
            imageInfo: [],
        };
    },
    props: {
        itemId: String,
    },
    methods: {
        validating() {
            this.invalid.category = this.product.categoryAdd === "" ? true | this.$refs.category.focus() : false;
            this.invalid.brand = this.product.brandAdd === "" ? true : false;
            this.invalid.name = this.product.name === "" ? true : false;
            this.invalid.price = this.product.price === 0 ? true : false;
            this.invalid.Color = this.product.colorsAdd.length === 0 ? true : false;
            this.invalid.date = this.product.launchDate === "" ? true : false;
            this.invalid.img = this.product.previewImage === null ? true : false;
            for (let prop in this.invalid) {
                setTimeout(() => {
                    this.invalid[`${prop}`] = false;
                }, 5000);
            }
            console.log(this.imageInfo);
        },
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
        submitForm() {},

        // restart() {
        //     this.product.brandAdd = "";
        //     this.product.name = "";
        //     this.product.price = 0;
        //     this.product.warranty = 0;
        //     this.product.launchDate = "";
        //     this.product.type = "";
        //     this.product.description = "";
        //     this.product.colors.forEach((color) => (color["active"] = false));
        //     this.product.previewImage = null;
        //     this.product.activeClose = !this.activeClose;
        // },

        previewMultiImage(event) {
            var imgName = event.target.files[0].name;
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
        createImage(file) {
            let reader = new FileReader();
            reader.onload = (event) => {
                this.previewImage = event.target.result;
            };
            reader.readAsDataURL(file);
        },
        uploadImage() {
            let data = new FormData();
            data.append("refun", this.imageFile);
            return data;
        },
        removeImage() {
            this.previewImage = null;
            if (this.itemId) {
                this.oldImage.useThis = false;
            }
            this.activeClose = !this.activeClose;
        },

        async getDataToEdit() {
            // if (this.itemId != null) {
            //     fetch(`${this.url}/product/${this.itemId}`)
            //         .then((res) => {
            //             return res.json();
            //         })
            //         .then((data) => {
            //             this.brandAdd = data.brand.brandName;
            //             this.typeAdd = data.type.typeName;
            //             this.name = data.productName;
            //             this.price = data.price;
            //             this.description = data.description;
            //             this.warranty = data.warranty;
            //             this.launchDate = data.launchDate;
            //             this.oldImage.image = data.imageUrl;
            //             this.previewImage = `${this.url}/image/get/${data.imageUrl}`;
            //             for (let i = 0; i < this.colors.length; i++) {
            //                 if (
            //                     data.colors.some((color) => {
            //                         return color.colorId === this.colors[i].colorId;
            //                     })
            //                 ) {
            //                     this.activeColor((this.colors[i].active = true), i);
            //                 }
            //             }
            //         })
            //         .catch((error) => console.log(error));
            // } else {
            //     this.restart();
            //     this.isLoad = false;
            // }
        },
    },
    computed: {
        isValid() {
            return this.brandAdd !== "" && this.name !== "" && this.price !== 0 && this.typeAdd !== "" && this.colorsAdd.length !== 0 && this.launchDate !== "" && this.previewImage !== null;
        },
        countText() {
            return this.product.name.length;
        },
    },
    async created() {
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
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='rgb(236, 105, 7)' stroke-linecap='round' stroke='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}

[type="radio"]:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='red' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}

[type="checkbox"]:focus,
[type="radio"]:focus {
    --tw-ring-inset: var(--tw-empty, /*!*/ /*!*/);
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: #f6ae2d;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
</style>
