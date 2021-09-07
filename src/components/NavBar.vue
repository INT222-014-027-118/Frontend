<template>
    <div class="relative">
        <div class="fixed w-full top-0 z-50 bg-white dark:bg-gray-900 dark:text-gray-100 select-none shadow-sm">
            <div class="flex flex-col mx-auto md:container px-2 h-12 sm:h-20 md:h-20 lg:h-24 sm:px-0 justify-around">
                <div class="flex items-center mx-auto my-auto w-full md:container justify-between md:justify-around px-2 ">
                    <div class="hidden sm:inline-flex">
                        <router-link to="/" class="flex items-center cursor-pointer hover:bg-primary hover:text-gray-100 rounded-full transition">
                            <img src="../assets/orange.svg" alt="orange_icon" class="h-11 md:h-12" />
                            <span class="py-2 font-bold md:text-lg lg:text-3xl tracking-tighter hidden md:inline-flex md:w-24 lg:w-32">range IT</span>
                        </router-link>
                    </div>
                    <Search class="w-full sm:w-6/12 sm:mx-2"></Search>
                    <div class="text-xs md:text-sm lg:text-base hidden sm:inline-flex">
                        <button class="rounded-full p-1 hover:opacity-80 flex items-center" @click="$router.push('/compare')">
                            <div class="relative">
                                <span class="material-icons pt-1 px-1"> compare_arrows </span>
                                <div class="absolute -top-1 -right-3 md:-top-2 sm:-right-3 bg-primary px-2 rounded-full text-white text-xs">VS</div>
                            </div>
                            <span class="">compare</span>
                        </button>
                        <!-- <div class="hidden sm:inline-flex"> -->
                        <button class="rounded-full p-1 flex items-center relative" @mouseenter="showCart = true" @click="$router.push('/cart')" @mouseleave="showCart = false">
                            <div class="relative hover:opacity-80">
                                <span class="material-icons pt-1 px-1"> shopping_cart </span>
                                <div class="absolute -top-1 -right-3 md:-top-2 sm:-right-3 bg-primary px-2 rounded-full text-white text-xs">
                                    {{ $store.getters.totalInCart == 0 ? "" : $store.getters.totalInCart }}
                                </div>
                            </div>
                            <span>cart</span>
                            <div
                                v-show="showCart"
                                class="absolute right-0 top-10 z-20 w-48 py-2 mt-2 bg-gray-100 rounded-md shadow-xl dark:bg-gray-800"
                                :class="$store.getters.totalInCart == 0 ? 'hidden' : ''"
                            >
                                ลองดู
                                <div v-for="cart in $store.getters.cart" :key="cart.name">
                                    <span>{{ cart.name }}</span>
                                    <span>{{ cart.price }} </span>
                                    <span>{{ cart.type }} </span>
                                </div>
                            </div>
                        </button>
                        <div class="border-r-2 dark:border-gray-500 border-gray-600 h-5 w-1 my-auto mx-2 md:mx-3 lg:mx-5" />
                        <button class="cursor-pointer flex items-center" @click="$router.push('/login')">
                            <div class="w-9 h-9 lg:w-10 lg:h-10">
                                <img :src="profile" class="w-9 h-9 lg:w-10 lg:h-10 hover:opacity-80 bg-primary rounded-full p-0.5" />
                            </div>
                            <span class="px-1 block">Login</span>
                        </button>
                        <!-- </div> -->
                    </div>
                </div>
                <div class="mb-2 lg:mb-3 hidden sm:inline-flex text-sm justify-center text-white">
                    <p class="bg-secondary px-4 rounded-3xl mx-5">heatset</p>
                    <p class="bg-secondary px-4 rounded-3xl mx-5">keyboard</p>
                    <p class="bg-secondary px-4 rounded-3xl mx-5">mouse</p>
                    <!-- <p class="bg-secondary px-4 rounded-3xl ">text</p>
                    <p class="bg-secondary px-4 rounded-3xl ">text</p> -->
                </div>
                <div class="cursor-pointer p-2 absolute right-5 sm:top-9 lg:top-11">
                    <div :class="{ hidden: !change }" @click="switchMode" class="">
                        <i class="material-icons mt-1">light_mode</i>
                    </div>
                    <div :class="{ hidden: change }" @click="switchMode" class="">
                        <i class="material-icons mt-1">dark_mode</i>
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
        <div class="fixed bottom-0 bg-white w-full sm:hidden text-xs tracking-tighter px-4 py-0.5 z-50">
            <div class="flex flex-row justify-around uppercase font-mono font-extralight	">
                <div class="w-16 p-1 flex flex-col items-center" @click="$router.push('/')">
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
                <div class="w-16 p-1 flex flex-col items-center" @click="$router.push('/cart')">
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
            profile: "http://daisyui.com/tailwind-css-component-profile-1@94w.png",
            showCart: false,
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
