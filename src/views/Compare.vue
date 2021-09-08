<template>
    <div class="mx-auto max-w-7xl sm:mt-5 dark:bg-gray-700 p-1">
        <div class="md:mt-0 p-1 md:p-5">
            <h1 class="text-2xl font-bold py-3">Compare products</h1>
            <div class="max-w-7xl overflow-auto">
                <!-- component -->
                <table class="">
                    <tbody>
                        <tr class="bg-white mb-10 lg:mb-0">
                            <td class=" lg:w-auto p-3 text-gray-800 text-center border border-b lg:table-cell relative lg:static">
                                Product
                            </td>
                            <td class=" lg:w-auto p-3 text-gray-800 border border-b lg:table-cell relative lg:static">
                                img
                            </td>
                        </tr>
                        <tr class="bg-white lg:hover:bg-gray-100 mb-10 lg:mb-0">
                            <td class=" lg:w-auto p-3 text-gray-800 text-center border border-b lg:table-cell relative lg:static">
                                attribute 1
                            </td>
                            <td class=" lg:w-auto p-3 text-gray-800 text-center border border-b lg:table-cell relative lg:static">item.brand</td>
                        </tr>
                        <tr class="bg-white lg:hover:bg-gray-100 mb-10 lg:mb-0">
                            <td class=" lg:w-auto p-3 text-gray-800 text-center border border-b lg:table-cell relative lg:static">
                                attribute 3
                            </td>
                            <td class=" lg:w-auto p-3 text-gray-800 text-center border border-b lg:table-cell relative lg:static">item.price</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
// import BaseItem from "../components/BaseItem.vue";
export default {
    components: {
        // BaseItem,
    },
};
</script>

<style></style>
