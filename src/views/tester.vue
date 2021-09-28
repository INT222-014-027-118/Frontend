<template>
    <div class="mx-auto max-w-2xl">
        <div class="inline-block w-full ">
            <input placeholder="Search..." class="inline w-full px-3 py-2 h-9 bg-gray-50 text-sm rounded-md border focus:outline-none focus:shadow-outline border-gray-300" />
        </div>
        <div class="w-full bg-white">
            <div class="w-full flex p-1">
                <div class="flex flex-col w-1/3 bg-yellow-300" v-for="cat in categories" :key="cat">
                    <!-- <div v-for="big in cat.bigTitle" :key="big"> -->
                    {{ cat }}
                    <!-- </div> -->
                </div>
                <div class="flex flex-col w-1/3 bg-green-500" v-for="cat in categories" :key="cat">
                    <div class="" v-for="sub in cat.subTitle" :key="sub">
                        {{ sub }}
                    </div>
                </div>
                <div class="flex flex-col w-1/3 bg-red-500" v-for="cat in categories" :key="cat">
                    <div class="" v-for="third in cat.thirdTitle" :key="third">
                        {{ third }}
                    </div>
                </div>
            </div>
        </div>

        <div class="flex bg-white p-7">
            <div class="p-9">
                <h2>
                    Categories
                </h2>
                <ul>
                    <li @click="selected = undefined" class="clickable">All</li>
                    <li v-for="category in categories" :key="category" @click="selected = category" class="clickable">{{ category }}</li>
                </ul>
            </div>
            <div class="p-9">
                <h2>
                    Items
                </h2>
                <ul>
                    <li v-for="item in filtered" :key="item">{{ item.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: undefined,
            categories: ["Animal", "Vegetable", "Mineral"],
            items: [
                {
                    name: "Dog",
                    type: "Animal",
                },
                {
                    name: "Cat",
                    type: "Animal",
                },
                {
                    name: "Carrot",
                    type: "Vegetable",
                },
                {
                    name: "Potato",
                    type: "Vegetable",
                },
                {
                    name: "Asbestos",
                    type: "Mineral",
                },
                {
                    name: "Bauxite",
                    type: "Mineral",
                },
                {
                    name: "Hematite",
                    type: "Mineral",
                },
            ],
        };
    },
    computed: {
        filtered() {
            let items = this.selected ? this.items.filter((item) => item.type == this.selected) : this.items;
            return items.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
        },
    },
};
</script>

<style scoped></style>
