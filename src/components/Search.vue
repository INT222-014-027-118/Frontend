<template>
    <div class="flex items-center rounded-3xl relative">
        <input
            type="text"
            v-model="text_Search"
            class="mx-0.5 py-1 px-5 md:px-10 rounded-2xl focus:outline-none  w-full  ring-2 ring-primary  focus:bg-gray-50 dark:focus:bg-gray-500  bg-gray-100 dark:bg-gray-600"
            @keypress.enter="gogo"
        />
        <button class="rounded-3xl px-3 absolute">
            <span class="material-icons mt-2 text-primary font-bold">
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
