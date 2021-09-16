<template>
    <div class="p-1 mx-auto max-w-7xl sm:mt-5 dark:bg-gray-700">
        <div class="p-1 md:mt-0 md:p-5">
            <h1 class="py-3 text-2xl font-bold">Comparison products</h1>
            <div class="overflow-auto max-w-7xl">
                <!-- component -->
                <table class="">
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
                </table>
            </div>
            
            <div class="flex flex-col justify-around w-48 h-48 p-6 bg-white rounded shadow-md">
                <div>
                    <p class="text-base text-gray-600">Revenue</p>
                </div>
                <div>
                    <p class="text-2xl font-bold text-gray-700">$56,734</p>
                </div>
                <div class="text-sm">
                    <p class="flex mb-1 text-green-500 item-center">
                        <i class="material-icons">
                            arrow_drop_up
                        </i>
                        5.77%
                    </p>
                    <p class="text-gray-600">Since last month</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            dumy: [],
        };
    },
};
</script>

<style></style>
