<template>
    <div class="mx-auto max-w-7xl sm:mt-5 dark:bg-gray-700">
        <div class="md:mt-0 md:p-5 lg:mx-auto grid gap-3 grid-cols-3">
            <div class="col-span-2 felx flex-col">
                <h1 class="text-2xl font-bold py-3">Shopping Cart</h1>
                <div class="flex p-2 w-full bg-white rounded-md">
                    <div class="flex-shrink-0 w-32 h-32 border border-gray-200 rounded-md overflow-hidden">
                        <img
                            src="https://kanexkane.com/wp-content/uploads/2020/04/kkblog-cover-review-logitech-g-pro-x-keyboard.jpg"
                            class="w-full h-full object-center object-cover"
                            alt="Product image"
                        />
                    </div>
                    <div class="flex justify-between w-full ml-3">
                        <div class="flex flex-col justify-between">
                            <div>
                                <p class="w-40">productName</p>
                                <p class="text-sm text-gray-500">ตัวเลือก | <span>ขาว</span></p>
                                <p class="text-xl">฿ 9999</p>
                            </div>
                            <div>
                                <div class="text-base text-green-600 font-medium flex items-center"><span class="material-icons"> check_circle_outline </span> In stork</div>
                            </div>
                        </div>
                        <div class="flex justify-center items-start">
                            <div class="bg-gray-200">
                                <button class="px-2">+</button>
                                <input class="w-10 bg-gray-200 text-center" type="number" />
                                <button class="px-2">-</button>
                            </div>
                        </div>
                        <span class="material-icons"> delete </span>
                    </div>
                </div>
            </div>

            <div class="bg-green-200 col-span-1">Order summary</div>
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
