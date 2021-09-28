<template>
    <div class="relative">
        <div class="fixed top-0 z-50 w-full bg-white shadow-sm select-none dark:bg-gray-900 dark:text-gray-100">
            <div class="flex items-center justify-around px-2 mx-auto max-w-7xl h-12 sm:h-20 md:h-20 lg:h-20 sm:px-0">
                <div class="hidden sm:inline-flex lg:w-3/12">
                    <router-link to="/" class="flex items-end transition rounded-full cursor-pointer bg-gradient-to-r hover:from-secondary hover:to-primary hover:text-gray-100">
                        <img src="../assets/orange.svg" alt="orange_icon" class="h-11 md:h-12 ml-2" />
                        <span class="hidden font-bold tracking-tighter md:text-lg lg:text-2xl md:inline-flex md:w-24 lg:w-24 pb-1 -ml-4">range IT</span>
                    </router-link>
                </div>
                <Search class="relative w-full sm:w-6/12 lg:w-5/12 sm:mx-2"></Search>
                <div class="justify-end hidden text-xs md:text-sm lg:text-base sm:inline-flex lg:w-3/12 ">
                    <button class="flex items-center p-1 rounded-full" @click="$router.push('/compare')" :class="[this.$route.name === 'Compare' ? 'text-primary' : '']">
                        <div class="relative">
                            <span class="px-1 pt-1 material-icons"> compare_arrows </span>
                            <div class="absolute px-2 text-xs text-white bg-primary rounded-full -top-1 -right-3 md:-top-2 sm:-right-3">VS</div>
                        </div>
                        <span class="tracking-tight font-semibold">compare</span>
                    </button>

                    <button
                        class="relative flex items-center p-1 rounded-full"
                        @mouseenter="showCart = true"
                        @click="$router.push('/cart')"
                        :class="[this.$route.name === 'Cart' ? 'text-primary' : '']"
                    >
                        <div class="relative">
                            <span class="px-1 pt-1" :class="[this.$route.name === 'Cart' ? 'material-icons' : 'material-icons-outlined']"> shopping_cart </span>
                            <div class="absolute px-2 text-xs text-white bg-primary rounded-full -top-1 -right-3 md:-top-2 sm:-right-3">
                                {{ $store.getters.totalInCart == 0 ? "" : $store.getters.totalInCart }}
                            </div>
                        </div>
                        <span class="tracking-tight font-semibold">cart</span>
                        <div class="absolute top-10 left-0 z-20 pt-10 transform -translate-y-10 w-16" 
                        @mouseenter="showCart = true" @mouseleave="showCart = false">
                            <div
                                v-show="showCart"
                                class="w-48 py-2 absolute right-0 bg-gray-100 rounded-md shadow-xl text-gray-800 dark:bg-gray-800 opacity-100 hover:text-black"
                                :class="$store.getters.totalInCart == 0 ? 'hidden' : ''"
                            >
                                testing
                                <div v-for="cart in $store.getters.cart" :key="cart.name">
                                    <span>{{ cart.name }}</span>
                                    <span>{{ cart.price }} </span>
                                    <span>{{ cart.type }} </span>
                                </div>
                            </div>
                        </div>
                    </button>

                    <div class="w-1 h-5 mx-2 my-auto border-r-2 border-gray-300 dark:border-gray-500 md:mx-3 lg:mx-4" />

                    <button class="flex items-center cursor-pointer" @click="$router.push('/login')" :class="[this.$route.name === 'Login' ? 'text-primary' : '']">
                        <div class="w-9 h-9 lg:w-10 lg:h-10">
                            <img :src="profile" class="w-9 h-9 lg:w-10 lg:h-10 bg-primary rounded-full p-0.5" />
                        </div>
                        <span class="block pl-2 pr-1 tracking-tight font-semibold">Login</span>
                    </button>

                    <!-- <router-link to="/user">user</router-link> -->
                </div>
            </div>
        </div>
        <div class="fixed bottom-5 right-5 p-2 z-50 cursor-pointer">
            <div :class="{ hidden: !change }" @click="switchMode" class="">
                <i class="mt-1 material-icons">light_mode</i>
            </div>
            <div :class="{ hidden: change }" @click="switchMode" class="">
                <i class="mt-1 material-icons">dark_mode</i>
            </div>
        </div>

        <!-- <router-link
            to="/form"
            class="fixed z-40 flex items-center text-green-700 cursor-pointer right-5 bottom-8 md:bottom-10 md:right-16 lg:bottom-20 lg:right-20 dark:text-green-100"
            @mouseenter="showAdd = true"
            @mouseleave="showAdd = false"
            v-if="this.$route.name == 'ProductsListTypes' || this.$route.name == 'ProductsList' || this.$route.name == 'Home'"
            :class="{ 'inline-flex md:hidden': this.$route.name == 'Home' }"
        >
            <span class="z-30 px-2 py-1 text-4xl bg-green-200 rounded-full shadow-md material-icons md:px-3 md:py-2 ring ring-green-400 dark:bg-green-700"> add </span>
            <span class="hidden py-4 pl-12 pr-4 -ml-10 bg-green-300 rounded-full shadow-md dark:bg-green-700 md:inline-flex" v-show="showAdd">Add Product</span>
        </router-link> -->
        <div class="fixed bottom-0 bg-white w-full sm:hidden text-xs tracking-tighter px-4 py-0.5 z-50 select-none">
            <div class="flex flex-row justify-around font-semibold capitalize">
                <div class="flex flex-col items-center w-16 p-1" @click="$router.push('/')">
                    <!-- <div class="material-icons">local_mall</div> -->
                    <img src="../assets/orange.svg" alt="orange_icon" class="max-h-6" />
                    <span class="">home</span>
                </div>
                <div class="flex flex-col items-center w-16 p-1">
                    <div class="material-icons">
                        <!-- apps -->
                        <!-- manage_search -->
                        grid_view
                    </div>
                    <span class="">categories</span>
                </div>
                <div class="flex flex-col items-center w-16 p-1" @click="$router.push('/cart')">
                    <div class="material-icons">shopping_cart</div>
                    <span class="">cart</span>
                </div>
                <div class="flex flex-col items-center w-16 p-1">
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
