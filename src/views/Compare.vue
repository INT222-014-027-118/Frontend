<template>
    <div class="p-1 mx-auto max-w-7xl sm:mt-5 dark:bg-gray-700">
        <div class="p-1 md:mt-0 md:p-5">
            <h1 class="py-3 text-2xl font-semibold">Compare products</h1>
            <!-- <div class="overflow-auto max-w-7xl"> -->
            <!-- component -->
            <!-- <table class="table-auto">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="mb-10 bg-white lg:mb-0">
                            <td class="relative p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                                Product
                            </td>
                            <td class="relative p-3 text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                                img
                            </td>
                        </tr>
                        <tr class="mb-10 bg-white lg:hover:bg-gray-100 lg:mb-0">
                            <td class="relative p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                                spceType 1
                            </td>
                            <td class="relative p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                                value1
                            </td>
                        </tr>
                        <tr class="mb-10 bg-white lg:hover:bg-gray-100 lg:mb-0">
                            <td class="relative p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                                spceType 3
                            </td>
                            <td class="relative p-3 text-center text-gray-800 border border-b lg:w-auto lg:table-cell lg:static">
                                value2
                            </td>
                        </tr>
                    </tbody>
                </table> -->
            <!-- </div> -->
            <div class="flex flex-col">
                <div class="flex p-1">
                    <div class="w-1/5"></div>
                    <div class="text-sm w-2/5">
                        <h1 class="text-4xl text-center">product 1</h1>
                    </div>
                    <div class="text-sm w-2/5">
                        <h1 class="text-4xl text-center">product 2</h1>
                    </div>
                </div>
                <div class="flex p-1">
                    <div class="w-1/5">title</div>
                    <div class="w-2/5 p-3 flex flex-col justify-center">
                        <img
                            src="https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg"
                            class="object-cover object-center select-none dark:bg-gray-400 "
                            alt="Product image"
                        />
                        <div>
                            <div class="w-full flex flex-wrap py-1">
                                <div v-for="color in colors" :key="color" class="flex flex-col items-center">
                                    <div
                                        class="w-8 h-8 my-2 mx-2 rounded-full"
                                        :style="{
                                            backgroundColor: `#${color.hexCode}`,
                                        }"
                                    ></div>
                                    <span class="text-xs"> {{ color.label }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-2/5 p-3 flex flex-col justify-center">
                        <img
                            src="https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg"
                            class="object-cover object-center select-none dark:bg-gray-400 "
                            alt="Product image"
                        />
                        <div>
                            <div class="w-full flex flex-wrap py-1">
                                <div v-for="color in colors" :key="color" class="flex flex-col items-center">
                                    <div
                                        class="w-8 h-8 my-2 mx-2 rounded-full"
                                        :style="{
                                            backgroundColor: `#${color.hexCode}`,
                                        }"
                                    />
                                    <span class="text-xs"> {{ color.label }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            dumy: [],
            colors: [
                {
                    id: 1,
                    label: "Red",
                    hexCode: "ff0000",
                },
                {
                    id: 2,
                    label: "Black",
                    hexCode: "000000",
                },
                {
                    id: 6,
                    label: "Gray",
                    hexCode: "9AA0A8",
                },
            ],
        };
    },
};
</script>

<style></style>
