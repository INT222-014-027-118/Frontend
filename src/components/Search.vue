<template>
    <div class="flex items-center bg-primary rounded-3xl">
        <button class="bg-primary rounded-3xl px-3 sm:hidden">
            <span class="material-icons mt-2 text-white">
                search
            </span>
        </button>
        <input
            type="text"
            v-model="text_Search"
            class="mx-0.5 py-1 px-5 md:px-5 rounded-2xl focus:ring-0  focus:outline-none  w-full border border-gray-500  focus:bg-gray-50 dark:focus:bg-gray-500  bg-gray-100 dark:bg-gray-600"
            @keypress.enter="gogo"
        />
        <button class="bg-primary rounded-3xl px-3 hidden sm:block">
            <span class="material-icons mt-2 text-white">
                search
            </span>
        </button>
        <div class="absolute top-10 w-full bg-red-100 rounded-lg" v-show="text_Search != ''">
            <div class="p-2">
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
                <p>text</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text_Search: "",
        };
    },
    methods: {
        gogo() {
            console.log(this.text_Search);
        },
    },
    created() {},
};
</script>

<style></style>
