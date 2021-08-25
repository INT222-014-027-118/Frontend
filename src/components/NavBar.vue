<template>
    <div class="relative">
        <div class="fixed w-full top-0 z-50  bg-white dark:bg-gray-900 dark:text-gray-100 select-none">
            <div class="flex items-center mx-auto lg:container px-2 h-12 sm:h-20 md:h-20 lg:h-28 sm:px-0">
                <div class="hidden sm:inline-flex m-2">
                    <router-link to="/" class="flex items-center cursor-pointer transform duration-200">
                        <img src="../assets/orange.svg" alt="orange_icon" class="h-12 md:h-14" />
                        <span class="p-2 font-bold md:text-lg lg:text-xl tracking-tighter animate-pulse hidden md:inline-flex w-32">range IT</span>
                    </router-link>
                </div>
                <div class="flex flex-col w-full">
                    <div class="flex items-center mx-auto w-full justify-between my-1">
                        <Search class="w-full sm:w-7/12 mr-5 sm:mx-2"></Search>
                        <div class="flex text-xs md:text-sm lg:text-base">
                            <button class="rounded-full p-1 hover:opacity-80 flex items-center">
                                <div class="relative">
                                    <span class="material-icons pt-1 px-1"> compare_arrows </span>
                                    <div class="absolute -top-1 -right-3 md:-top-2 sm:-right-3 bg-primary px-2 rounded-full text-white text-xs">VS</div>
                                </div>
                                <span class="">compare</span>
                            </button>
                            <div class="hidden sm:inline-flex">
                                <button class="rounded-full p-1 hover:opacity-80 flex items-center">
                                    <div class="relative">
                                        <span class="material-icons pt-1 px-1"> shopping_cart </span>
                                        <div class="absolute -top-1 -right-3 md:-top-2 sm:-right-3 bg-primary px-2 rounded-full text-white text-xs">2</div>
                                    </div>
                                    <span class="">cart</span>
                                </button>
                                <div class="border-r-2 dark:border-gray-500 border-gray-600 h-5 w-1 my-auto mx-1 lg:mx-5" />
                                <button class="cursor-pointer flex items-center mx-2" @click="$router.push('/login')">
                                    <img :src="profile" class="w-9 h-9 lg:w-10 lg:h-10 hover:opacity-80 bg-primary rounded-full p-0.5" />
                                    <span class="px-1">Login</span>
                                </button>
                                <!-- <div class="cursor-pointer p-2">
                                    <div :class="{ hidden: !change }" @click="switchMode" class="">
                                        <i class="material-icons mt-1">light_mode</i>
                                    </div>
                                    <div :class="{ hidden: change }" @click="switchMode" class="">
                                        <i class="material-icons mt-1">dark_mode</i>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="hidden sm:inline-flex text-sm my-1">
                        <button class="mx-2 bg-secondary hover:bg-primary hover:text-gray-50 duration-200 rounded-3xl px-4">text</button>
                        <button class="mx-2 bg-secondary hover:bg-primary hover:text-gray-50 duration-200 rounded-3xl px-4">text</button>
                        <button class="mx-2 bg-secondary hover:bg-primary hover:text-gray-50 duration-200 rounded-3xl px-4">text</button>
                        <button class="mx-2 bg-secondary hover:bg-primary hover:text-gray-50 duration-200 rounded-3xl px-4">text</button>
                        <button class="mx-2 bg-secondary hover:bg-primary hover:text-gray-50 duration-200 rounded-3xl px-4">text</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- <router-link
            to="/form"
            class="fixed right-5 bottom-8  md:bottom-10 md:right-16 lg:bottom-20 lg:right-20 z-40 flex items-center cursor-pointer text-green-700 dark:text-green-100"
            @mouseenter="showAdd = true"
            @mouseleave="showAdd = false"
            v-if="this.$route.name == 'ProductsListTypes' || this.$route.name == 'ProductsList' || this.$route.name == 'Home'"
            :class="{ 'inline-flex md:hidden': this.$route.name == 'Home' }"
        >
            <span class="material-icons px-2 py-1 md:px-3 md:py-2 ring shadow-md ring-green-400 bg-green-200 dark:bg-green-700 rounded-full text-4xl z-30"> add </span>
            <span class="-ml-10 pl-12 pr-4 py-4 rounded-full shadow-md bg-green-300 dark:bg-green-700  hidden md:inline-flex" v-show="showAdd">Add Product</span>
        </router-link> -->
        <div class="fixed bottom-0 bg-red-300 w-full sm:hidden text-xs capitalize tracking-tighter px-4">
            <div class="flex flex-row justify-around">
                <div class="w-16 p-1 flex flex-col items-center">
                    <!-- <div class="material-icons">local_mall</div> -->
                    <img src="../assets/orange.svg" alt="orange_icon" class="max-h-6" />
                    <span class="">home</span>
                </div>
                <div class="w-16 p-1 flex flex-col items-center">
                    <div class="material-icons">
                        <!-- apps -->
                        <!-- manage_search -->
                        grid_view
                    </div>
                    <span class="">categories</span>
                </div>
                <div class="w-16 p-1 flex flex-col items-center">
                    <div class="material-icons">shopping_cart</div>
                    <span class="">cart</span>
                </div>
                <div class="w-16 p-1 flex flex-col items-center">
                    <div class="material-icons">person</div>
                    <span class="">account</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Menu from "../components/Menu.vue";
import Search from "../components/Search.vue";
export default {
    props: {
        change: Boolean,
    },
    components: {
        // Menu,
        Search,
    },
    data() {
        return {
            showAdd: false,
            profile:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"
        };
    },
    methods: {
        switchMode() {
            this.$emit("switch-mode");
        },
    },
};
</script>

<style></style>
