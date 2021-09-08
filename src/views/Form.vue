<template>
    <!-- <div class="" v-show="!isLoad"> -->
    <form @submit.prevent="submitForm" class="bg-white rounded shadow-md max-w-7xl px-2 sm:px-6 py-4 mx-auto flex flex-col">
        <div class="grid dark:bg-gray-700 sm:grid-cols-2">
            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Left ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
            <div>
                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="brand">Brand *</label>
                    <select class="input-css" id="brandAdd" v-model="brandAdd" required :class="{ 'ring ring-red-400': invalid.brand }">
                        <option value="" disabled selected>[ Select Brand ]</option>
                        <option v-for="brand in brands" :key="brand.brandId" :value="brand.brandName" class="text-lg">{{ brand.brandName }}</option>
                    </select>
                    <span v-if="invalid.brand" class="absolute -bottom-3 left-3 sm:bottom-2 sm:left-1/2 transform sm:-translate-x-1/2 font-mono text-red-500 select-none text-sm"
                        >Please select Brand</span
                    >
                </div>

                <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
                    <label class="label-css" for="">Product Name *</label>
                    <input
                        v-model.trim="name"
                        class="input-css"
                        id=""
                        type="text"
                        placeholder="Please input name 40 characters"
                        maxlength="40"
                        required
                        :class="{ 'ring ring-red-400': invalid.name }"
                    />
                    <span v-if="invalid.name" class="absolute -bottom-3 left-3 sm:bottom-2 sm:left-1/2 transform sm:-translate-x-1/2 font-mono text-red-500 select-none text-sm"
                        >Please input product name</span
                    >
                </div>

                <div class="flex flex-col md:flex-row lg:w-full">
                    <div class="md:w-1/2 px-3 mb-6 md:mb-0 relative">
                        <label class="label-css" for="price">Price *</label>
                        <input v-model="price" step="0.01" class="input-css" id="price" type="number" placeholder="" min="1" max="99999" required :class="{ 'ring ring-red-400': invalid.price }" />
                        <span v-if="invalid.price" class="absolute -bottom-3 left-8 sm:bottom-2 font-mono text-red-500 select-none text-sm">Please input Price</span>
                    </div>

                    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="label-css" for="grid-state">Type *</label>
                        <div class="relative ">
                            <select class="input-css" id="type" v-model="typeAdd" required :class="{ 'ring ring-red-400': invalid.type }">
                                <option value="" disabled selected>[ Select Type ]</option>
                                <option v-for="type in types" :key="type.id" :value="type.typeName">{{ type.typeName }}</option>
                            </select>
                            <span v-if="invalid.type" class="absolute -bottom-3 left-8 sm:bottom-2 font-mono text-red-500 select-none text-sm">Please select type</span>
                        </div>
                    </div>
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="description">Description</label>
                    <textarea class="input-css h-40" id="description" v-model="description" type="text" placeholder="Please enter text up to 500 characters." maxlength="500" />
                </div>

                <div class="relative px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css" for="previewImage">color *</label>
                    <div class="input-css z" :class="{ 'ring ring-red-400': invalid.Color }">
                        <input
                            type="checkbox"
                            name="color"
                            class="w-8 h-8 m-2 border-1 rounded-full form-checkbox ring-transparent ring-4 ring-offset-2 focus:ring-4 focus:ring-offset-2 focus:ring-secondary active:ring-secondary checked:ring-primary"
                            v-for="(color, index) in $store.getters.itemTest[2].colors"
                            :key="color.colorId"
                            :style="{
                                backgroundColor: color.hexColor,
                            }"
                            :value="color.hexColor"
                            v-model="colorPick"
                            @click="selectColor(index)"
                        />
                    </div>
                    <span v-if="invalid.Color" class="absolute -bottom-6 left-3 sm:-bottom-1 sm:left-1/2 transform sm:-translate-x-1/2 font-mono text-red-500 select-none text-sm"
                        >Please select product color</span
                    >
                </div>
            </div>

            <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Right ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

            <div>
                <div class="px-3 mb-6 lg:w-full md:mb-0 relative">
                    <label class="label-css" for="previewImage">Launch date *</label>
                    <input type="date" class="input-css" v-model="launchDate" required :class="{ 'ring ring-red-400': invalid.date }" />
                    <span v-if="invalid.date" class="absolute -bottom-3 left-3 sm:bottom-2 sm:left-1/2 transform sm:-translate-x-1/2 font-mono text-red-500 select-none text-sm"
                        >Please input date</span
                    >
                </div>

                <div class="px-3 mb-6 lg:w-full md:mb-0">
                    <label class="label-css">Warranty</label>
                    <div class="flex flex-col md:flex-row input-css">
                        <div class="flex items-center mr-7">
                            <input type="radio" id="0" name="warranty" v-model="warranty" value="0" class="w-4 h-5 mr-2" />
                            <label for="0">none</label>
                        </div>
                        <div class="flex items-center mr-7">
                            <input type="radio" id="1" name="warranty" v-model="warranty" value="1" class="w-4 h-5 mr-2" />
                            <label for="1">1 year</label>
                        </div>
                        <div class="flex items-center mr-7">
                            <input type="radio" id="2" name="warranty" v-model="warranty" value="2" class="w-4 h-5 mr-2" />
                            <label for="2">2 year</label>
                        </div>
                    </div>
                </div>

                <div class="px-3 mb-6 lg:w-full md:mb-0 relative" :class="{ hidden: activeClose }">
                    <label class="label-css" for="description">File *</label>
                    <input class="input-css" id="file" v-on:change="onFileChange($event)" type="file" :class="{ 'ring ring-red-400': invalid.img }" accept="image/x-png,image/gif,image/jpeg" />
                    <span v-if="invalid.img" class="absolute -bottom-3 left-3 sm:bottom-2 sm:left-1/2 transform sm:-translate-x-1/2 font-mono text-red-500 select-none text-sm"
                        >Please choose image</span
                    >
                </div>

                <div class="px-3 mb-6 lg:w-full md:mb-0" :class="{ hidden: !activeClose }">
                    <label class="label-css" for="previewImage">Preview</label>
                    <div class="relative input-css">
                        <span class="absolute p-1 text-white bg-blue-700 rounded-full cursor-pointer material-icons top-2 right-2 select-none" @click="removeImage()">close</span>
                        <img :src="previewImage" alt="Preview Image" class="max-h-80" />
                    </div>
                </div>
            </div>
        </div>

        <button @click="validating" type="submit" class="rounded shadow-md cursor-pointer btn self-end">Add Product</button>
    </form>
    <!-- </div> -->
    <!-- <div v-show="isLoad" class="h-screen w-full flex items-center justify-center">
        <i class="material-icons text-4xl animate-spin" v-show="isLoad"> autorenew </i>
    </div> -->
</template>

<script>
export default {
    data() {
        return {
            brands: [],
            colors: [],
            types: [],
            brandAdd: "",
            colorsAdd: [],
            name: "",
            price: 0,
            warranty: 0,
            launchDate: "",
            typeAdd: "",
            description: "",
            // url: "http://137.116.145.41/refun",
            previewImage: null,
            activeClose: true,
            productIds: [],
            invalid: {
                brand: false,
                name: false,
                price: false,
                type: false,
                Color: false,
                date: false,
                img: false,
            },
            isLoad: true,
            imageFile: null,
            oldImage: { image: "", useThis: Boolean },
        };
    },
    props: {
        itemId: String,
    },
    methods: {
        validating() {
            this.invalid.brand = this.brandAdd === "" ? true : false;
            this.invalid.name = this.name === "" ? true : false;
            this.invalid.price = this.price === 0 ? true : false;
            this.invalid.type = this.typeAdd === "" ? true : false;
            this.invalid.Color = this.colorsAdd.length === 0 ? true : false;
            this.invalid.date = this.launchDate === "" ? true : false;
            this.invalid.img = this.previewImage === null ? true : false;
            for (let prop in this.invalid) {
                setTimeout(() => {
                    this.invalid[`${prop}`] = false;
                }, 5000);
            }
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
        submitForm() {
            if (this.isValid) {
                let id = this.itemId ? this.itemId : this.generateNewId();
                let body = JSON.stringify({
                    productId: Number(id),
                    productName: this.name,
                    price: Number(this.price),
                    description: this.description,
                    brand: this.brands.find((brand) => {
                        return brand.brandName == this.brandAdd;
                    }),
                    type: this.types.find((type) => {
                        return type.typeName == this.typeAdd;
                    }),
                    warranty: Number(this.warranty),
                    launchDate: this.launchDate,
                    imageUrl: this.oldImage.useThis ? this.oldImage.image : this.imageFile.name,
                    colors: this.colorsAdd,
                });
                this.updateProduct(body);
            }
        },
        updateProduct(body) {
            const pathProduct = this.itemId ? `${this.url}/product/update` : `${this.url}/product/add`;
            const pathIamge = this.itemId ? `${this.url}/image/update/${this.oldImage.image}` : `${this.url}/image/add`;
            const method = this.itemId ? "PUT" : "POST";
            fetch(pathProduct, {
                method: method,
                headers: {
                    "content-type": "application/json",
                },
                body: body,
            })
                .then((res) => {
                    if (res.ok) {
                        if (this.oldImage.useThis === false) {
                            fetch(pathIamge, {
                                method: method,
                                body: this.uploadImage(),
                            })
                                .then((res) => {
                                    if (res.ok) {
                                        alert("Completed");
                                        setTimeout(() => {
                                            this.restart();
                                        }, 1000);
                                        this.$router.push("/");
                                    } else {
                                        res.text().then((data) => alert(data));
                                    }
                                })
                                .catch((error) => console.log(error));
                        } else {
                            alert("Completed");
                            setTimeout(() => {
                                this.restart();
                            }, 1000);
                            this.$router.push("/");
                        }
                    } else {
                        res.text().then((data) => alert(data));
                    }
                })
                .catch((error) => console.log(error));
        },

        restart() {
            this.brandAdd = "";
            this.name = "";
            this.price = 0;
            this.warranty = 0;
            this.launchDate = "";
            this.type = "";
            this.description = "";
            this.colors.forEach((color) => (color["active"] = false));
            this.previewImage = null;
            this.activeClose = !this.activeClose;
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
        activeColor(isActive, index) {
            this.colors[index].active = isActive;
            this.colorsAdd = this.colors
                .filter((color) => {
                    return color.active === true;
                })
                .map((color) => {
                    return {
                        colorId: color.colorId,
                        colorName: color.colorName,
                        hexColor: color.hexColor,
                    };
                });
        },

        async getDataToEdit() {
            if (this.itemId != null) {
                fetch(`${this.url}/product/${this.itemId}`)
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        this.brandAdd = data.brand.brandName;
                        this.typeAdd = data.type.typeName;
                        this.name = data.productName;
                        this.price = data.price;
                        this.description = data.description;
                        this.warranty = data.warranty;
                        this.launchDate = data.launchDate;
                        this.oldImage.image = data.imageUrl;
                        this.previewImage = `${this.url}/image/get/${data.imageUrl}`;
                        for (let i = 0; i < this.colors.length; i++) {
                            if (
                                data.colors.some((color) => {
                                    return color.colorId === this.colors[i].colorId;
                                })
                            ) {
                                this.activeColor((this.colors[i].active = true), i);
                            }
                        }
                    })
                    .catch((error) => console.log(error));
            } else {
                this.restart();
                this.isLoad = false;
            }
        },
    },
    computed: {
        isValid() {
            return this.brandAdd !== "" && this.name !== "" && this.price !== 0 && this.typeAdd !== "" && this.colorsAdd.length !== 0 && this.launchDate !== "" && this.previewImage !== null;
        },
    },
    async created() {
        this.oldImage.useThis = this.itemId ? true : false;
        await fetch(`${this.url}/product/list`)
            .then((res) => res.json())
            .then(
                (data) =>
                    (this.productIds = data.map((pid) => {
                        return pid.productId;
                    }))
            )
            .catch((error) => console.log(error));

        await fetch(`${this.url}/color/list`)
            .then((res) => {
                this.isLoad = true;
                return res.json();
            })
            .then((data) => (this.colors = data))
            .then(() => {
                this.colors.forEach((color) => (color["active"] = false));
            })
            .catch((error) => console.log(error));

        await fetch(`${this.url}/brand/list`)
            .then((res) => res.json())
            .then((data) => (this.brands = data))
            .catch((error) => console.log(error));

        await fetch(`${this.url}/type/list`)
            .then((res) => {
                this.isLoad = false;
                return res.json();
            })
            .then((data) => (this.types = data))
            .catch((error) => console.log(error));

        await this.getDataToEdit();
    },
};
</script>

<style scoped>
.input-css {
    @apply w-full border border-gray-500 focus:outline-none rounded focus:bg-gray-50 dark:focus:bg-gray-500 py-3 px-5 md:px-10 mb-3 bg-gray-100 dark:bg-gray-600;
}

.label-css {
    @apply block uppercase tracking-wide text-xs font-bold mb-2;
}

.btn {
    @apply bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4;
}
</style>
