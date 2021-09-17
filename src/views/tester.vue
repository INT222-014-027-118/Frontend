<template>
    <div class="mx-auto max-w-2xl">
        <div class="inline-block w-full ">
            <input placeholder="Search..." class="inline w-full px-3 py-2 h-9 bg-gray-50 text-sm rounded-md border focus:outline-none focus:shadow-outline border-gray-300" />
        </div>
        <div class="w-full bg-white">
            <div class="flex border-4 p-2" v-for="cat in categories" :key="cat">
                <div class="flex bg-yellow-300">
                    {{ cat.bigTitle }}
                    <div class="flex bg-green-500">
                        {{ cat.subTitle }}
                        <div class="flex bg-red-400">{{ cat.thirdTitle }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    bigTitle: [{ spec: "1" }],
                    subTitle: [{ spec: "2" }, { spec: "3" }],
                    thirdTitle: [],
                },
                {
                    bigTitle: [{ spec: "4" }],
                    subTitle: [{ spec: "5" }, { spec: "6" }, { spec: "7" }],
                    thirdTitle: [{ spec: "8" }, { spec: "9" }],
                },
                {
                    bigTitle: [{ spec: "7" }],
                    subTitle: [],
                    thirdTitle: [],
                },
            ],
        };
    },
};
</script>

<style></style>
