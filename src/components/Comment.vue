<template>
    <div class="flex items-start border-b mb-2 p-2">
        <div class="flex-shrink-0">
            <div class="inline-block relative">
                <div class="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden">
                    <img class="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                    <div class="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                </div>
            </div>
        </div>
        <div class="ml-6">
            <p class="flex items-baseline">
                <span class="text-gray-700 dark:text-gray-400 font-bold">Mary T.</span>
                <!-- <span class="ml-2 text-green-600 text-xs">Verified Buyer</span> -->
            </p>
            <div class="flex items-center mt-1">
                <span
                    class="material-icons mb-1 text-xl"
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[reviews.average > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                    aria-hidden="true"
                >
                    star
                </span>
            </div>

            <div class="mt-3">
                <!-- <span class="font-bold">Sapien consequat eleifend!</span> -->
                <p class="mb-7 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: {
                totalCount: 123,
                average: 4,
            },
        };
    },
};
</script>

<style></style>
