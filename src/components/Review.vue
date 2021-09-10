<template>
    <div class="mx-auto w-full">
        <div class="tracking-wide px-0 py-0">
            <p class="font-semibold text-xl mb-3 px-2">Customer reviews</p>
            <div class="mx-4 flex items-center">
                <div class="flex items-center">
                    <span
                        class="material-icons mb-1"
                        v-for="rating in [0, 1, 2, 3, 4]"
                        :key="rating"
                        :class="[reviews.average > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                        aria-hidden="true"
                    >
                        star
                    </span>
                </div>
                <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
                <a href="reviews.href" class="ml-3 text-sm font-medium text-primary hover:text-secondary">{{ reviews.totalCount }} reviews</a>
            </div>
            <div class="mt-3">
                <div class="flex items-center mt-1">
                    <div class="w-1/5 text-center text-primary tracking-tighter">
                        <span>5 star</span>
                    </div>
                    <div class="w-3/5">
                        <div class="bg-gray-300 w-full rounded-lg h-2">
                            <!-------------------------------- revie ---------------------------------->
                            <div class="bg-secondary rounded-lg h-2" :style="{ width: '51%' }"></div>
                        </div>
                    </div>
                    <div class="w-1/5 text-center text-gray-700 pl-3">
                        <!-----------------%%%%% percent %%%%---------------->
                        <span class="text-sm">51%</span>
                    </div>
                </div>
                <!-- first -->
                <div class="flex items-center mt-1">
                    <div class="w-1/5 text-center text-primary tracking-tighter">
                        <span>4 star</span>
                    </div>
                    <div class="w-3/5">
                        <div class="bg-gray-300 w-full rounded-lg h-2">
                            <!-------------------------------- revie ---------------------------------->
                            <div class="bg-secondary rounded-lg h-2" :style="{ width: '17%' }"></div>
                        </div>
                    </div>
                    <div class="w-1/5 text-center text-gray-700 pl-3">
                        <!-----------------%%%%% percent %%%%---------------->
                        <span class="text-sm">17%</span>
                    </div>
                </div>
                <!-- second -->
                <div class="flex items-center mt-1">
                    <div class="w-1/5 text-center text-primary tracking-tighter">
                        <span>3 star</span>
                    </div>
                    <div class="w-3/5">
                        <div class="bg-gray-300 w-full rounded-lg h-2">
                            <!-------------------------------- revie ---------------------------------->
                            <div class=" bg-secondary rounded-lg h-2" :style="{ width: '19%' }"></div>
                        </div>
                    </div>
                    <div class="w-1/5 text-center text-gray-700 pl-3">
                        <!-----------------%%%%% percent %%%%---------------->
                        <span class="text-sm">19%</span>
                    </div>
                </div>
                <!-- thierd -->
                <div class="flex items-center mt-1">
                    <div class=" w-1/5 text-center text-primary tracking-tighter">
                        <span>2 star</span>
                    </div>
                    <div class="w-3/5">
                        <div class="bg-gray-300 w-full rounded-lg h-2">
                            <!-------------------------------- revie ---------------------------------->
                            <div class=" bg-secondary rounded-lg h-2" :style="{ width: '8%' }"></div>
                        </div>
                    </div>
                    <div class="w-1/5 text-center text-gray-700 pl-3">
                        <!-----------------%%%%% percent %%%%---------------->
                        <span class="text-sm">8%</span>
                    </div>
                </div>
                <!-- 4th -->
                <div class="flex items-center mt-1">
                    <div class="w-1/5 text-center text-primary tracking-tighter">
                        <span>1 star</span>
                    </div>
                    <div class="w-3/5">
                        <div class="bg-gray-300 w-full rounded-lg h-2">
                            <!-------------------------------- revie ---------------------------------->
                            <div class=" bg-secondary rounded-lg h-2" :style="{ width: '5%' }"></div>
                        </div>
                    </div>
                    <div class="w-1/5 text-center text-gray-700 pl-3">
                        <!-----------------%%%%% percent %%%%---------------->
                        <span class="text-sm">5%</span>
                    </div>
                </div>
                <!-- 5th -->
            </div>
        </div>
        <!-- <div class="w-full px-4">
            <h3 class="font-medium tracking-tight">Review this item</h3>
            <p class="text-gray-700 text-sm py-1">
                give your opinion about this item.
            </p>
            <button class="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2">write a review</button>
        </div> -->
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
