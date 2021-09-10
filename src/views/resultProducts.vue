<template>
    <div class="container lg:max-w-7xl mx-auto py-5 grid gap-1 md:gap-2 lg:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        <div class="bg-white px-3 pb-3 select-none">
            <div class="border-b-2">
                <div class="flex justify-between items-center text-gray-600 hover:text-black cursor-pointer py-3" @click="showCat = !showCat">
                    <span class="font-semibold">Category</span> <span class="text-base font-bold">+</span>
                </div>
                <div class="p-1 mb-3 space-y-2 bg-gray-50 rounded-md" v-show="showCat">
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value="headphone"> headphone</label>
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value="speaker"> speaker</label>
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value="keyboard"> keyboard</label>
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value="mouse"> mouse</label>
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value="computers"> computers</label>
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value="gaming gear"> gaming gear</label>
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value="smart gadget"> smart gadget</label>
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value="moblie accessories"> moblie accessories</label>
                </div>
            </div>
            <div class="border-b-2">
                <div class="flex justify-between items-center text-gray-600 hover:text-black cursor-pointer py-3" @click="showtype = !showtype">
                    <span class="font-semibold">Type</span> <span class="text-base font-bold">+</span>
                </div>
                <div class="p-1 mb-3 space-y-2 bg-gray-50 rounded-md" v-show="showtype">
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value=""> </label>
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value=""> </label>
                    <label id="" class="px-2 py-1 rounded-md hover:bg-gray-200 flex items-center"><input type="checkbox" class="form-checkbox rounded-md mr-4" v-model="categorysName" value=""> </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCat: false,
            showtype: false,
            categorysName:[]
        };
    },
    props:{
        categoryName:String,
    },
    created() {
        this.categorysName.push(this.categoryName)
    },
};
</script>

<style></style>
