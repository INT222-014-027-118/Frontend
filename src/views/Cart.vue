<template>
    <div class="mx-auto max-w-7xl sm:mt-5">
        <div class="relative grid grid-cols-3 gap-3 p-1 md:mt-0 md:p-5 lg:mx-auto">
            <div class="flex-col col-span-3 md:col-span-2 felx">
                <h1 class="py-3 text-2xl font-semibold">Shopping Cart</h1>
                <div class="flex w-full p-2 overflow-auto bg-white dark:bg-dark_tertiary rounded-md shadow-sm">
                    <div class="flex-shrink-0 w-20 h-20 overflow-hidden border border-gray-200 rounded-md sm:w-32 sm:h-32 lg:w-44 lg:h-44">
                        <img src="https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg" class="object-cover object-center w-full h-full" alt="Product image" />
                    </div>
                    <div class="flex justify-between w-full ml-3 sm:p-3">
                        <div class="flex flex-col w-8/12 sm:flex sm:justify-between sm:flex-row">
                            <div class="flex flex-col justify-between w-11/12">
                                <div>
                                    <p class="text-sm sm:text-base">productName prod uctN ame</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-300">white</p>
                                </div>
                                <div>
                                    <div class="flex items-center py-3 text-sm font-medium text-green-600"><span class="material-icons"> check_circle_outline </span> In stork</div>
                                </div>
                            </div>
                            <!-- <select name="" id="" class="self-start p-1 bg-gray-200 rounded-md cursor-pointer focus:outline-none">
                                <option value="1" class="">1</option>
                                <option value="2" class="">2</option>
                            </select> -->
                            <div class="">
                                <form @submit.prevent class="w-1/2 sm:w-full">
                                    <div class="flex items-center justify-center bg-gray-200  dark:bg-gray-600 dark:bg-opacity-70 rounded-md">
                                        <button class="w-full px-1 font-semibold" @click="minus">-</button>
                                        <input type="number" class="w-full p-1 text-right rounded-md shadow-inner cursor-pointer sm:w-9 bg-gray-50 dark:bg-dark_secondary focus:outline-none" step="1" max="10" min="1" required v-model="quantity" />
                                        <button class="w-full px-1 font-semibold" @click="plus">+</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between w-4/12 font-semibold text-right">
                            <span class="text-xl md:text-2xl text-primary">฿ 999999</span>
                            <div class="inline-flex justify-end"><button class="px-1 rounded-md hover:bg-gray-200">remove</button></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-3 pb-16 md:col-span-1">
                <h1 class="py-3 text-2xl font-semibold">Order summary</h1>
                <div class="w-full px-5 pb-5 bg-white dark:bg-dark_tertiary rounded-md lg:px-6">
                    <div class="flex justify-between py-4 border-b">
                        <div class="text-gray-500 dark:text-gray-300">Subtotal</div>
                        <div class="font-semibold">฿ 999999</div>
                    </div>
                    <div class="flex justify-between py-4 border-b">
                        <div class="text-gray-500 dark:text-gray-300">Shipping estimate</div>
                        <div class="font-semibold">฿ 999999</div>
                    </div>
                    <div class="flex justify-between py-4 border-b">
                        <div class="text-gray-500 dark:text-gray-300">tax estimate</div>
                        <div class="font-semibold">฿ 999999</div>
                    </div>
                    <div class="fixed bottom-0 left-0 w-full px-5 py-2 bg-white dark:bg-dark_secondary sm:dark:bg-dark_tertiary pb-16 sm:pb-5 sm:pt-5 md:px-0 md:static border-t md:border-0 dark:border-gray-600">
                        <div class="flex justify-between py-4">
                            <div class="text-xl font-semibold">Oder total</div>
                            <div class="text-xl font-semibold md:text-2xl text-primary">฿ 999999</div>
                        </div>
                        <button class="w-full p-3 text-center text-white rounded-md bg-primary hover:bg-secondary">Checkout</button>
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
            quantity: 1,
            stork: 3,
        };
    },
    methods: {
        minus() {
            if (this.quantity > 0) {
                this.quantity -= 1;
                if (this.quantity <= 0) {
                    console.log("remove");
                }
            }
        },
        plus() {
            if (this.quantity < this.stork) {
                this.quantity += 1;
            }
        },
    },
};
</script>

<style scpoed>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox */
input[type="number"] {
    -moz-appearance: textfield;
}
</style>
