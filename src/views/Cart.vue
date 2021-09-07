<template>
    <div class="mx-auto max-w-7xl sm:mt-5 dark:bg-gray-700">
        <div class="md:mt-0 p-1 md:p-5 lg:mx-auto grid gap-3 grid-cols-3">
            <div class="col-span-3 md:col-span-2 felx flex-col">
                <h1 class="text-2xl font-bold py-3">Shopping Cart</h1>
                <div class="flex p-2 w-full bg-white rounded-md">
                    <div class="flex-shrink-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-44 lg:h-44 border border-gray-200 rounded-md overflow-hidden">
                        <img
                            src="https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg"
                            class="w-full h-full object-center object-cover"
                            alt="Product image"
                        />
                    </div>
                    <div class="flex w-full justify-between ml-3 sm:p-3">
                        <div class="flex flex-col sm:flex sm:justify-between sm:flex-row w-3/5">
                            <div class="flex flex-col justify-between">
                                <div>
                                    <p class="text-sm sm:text-base">productName prod uctN ame</p>
                                    <p class="text-sm text-gray-500">white</p>
                                </div>
                                <div>
                                    <div class="text-sm text-green-600 font-medium flex items-center py-3"><span class="material-icons"> check_circle_outline </span> In stork</div>
                                </div>
                            </div>
                            <select name="" id="" class="self-start p-1 bg-gray-200 rounded-md cursor-pointer focus:outline-none">
                                <option value="1" class="">1</option>
                                <option value="2" class="">2</option>
                            </select>
                        </div>
                        <div class="flex flex-col justify-between text-right font-semibold">
                            <span class="text-xl md:text-2xl text-primary">฿ 999999</span>
                            <div class="inline-flex justify-end"><button class="hover:bg-gray-200 px-1 rounded-md">remove</button></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-3 md:col-span-1">
                <h1 class="text-2xl font-bold py-3">Order summary</h1>
                <div class="px-5 lg:px-6 pb-5 w-full bg-white rounded-md">
                    <div class="flex justify-between py-4 border-b">
                        <div class="text-gray-500">Subtotal</div>
                        <div class="font-semibold">฿ 999999</div>
                    </div>
                    <div class="flex justify-between py-4 border-b">
                        <div class="text-gray-500">Shipping estimate</div>
                        <div class="font-semibold">฿ 999999</div>
                    </div>
                    <div class="flex justify-between py-4 border-b">
                        <div class="text-gray-500">tax estimate</div>
                        <div class="font-semibold">฿ 999999</div>
                    </div>
                    <div class="flex justify-between py-4">
                        <div class="text-xl font-semibold">Oder total</div>
                        <div class="text-xl md:text-2xl text-primary font-semibold">฿ 999999</div>
                    </div>
                    <button class="bg-primary text-white hover:bg-secondary text-center w-full rounded-md p-3">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
