<template>
    <div class="relative">
        <div class="fixed top-0 z-50 w-full bg-white shadow-sm select-none dark:bg-dark_secondary dark:text-gray-100">
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

                    <button class="relative flex items-center p-1 rounded-full" @mouseenter="showCart = true" @click="$router.push('/cart')" :class="[this.$route.name === 'Cart' ? 'text-primary' : '']">
                        <div class="relative">
                            <span class="px-1 pt-1" :class="[this.$route.name === 'Cart' ? 'material-icons' : 'material-icons-outlined']"> shopping_cart </span>
                            <div class="absolute px-2 text-xs text-white bg-primary rounded-full -top-1 -right-3 md:-top-2 sm:-right-3">
                                {{ $store.getters.totalInCart == 0 ? "" : $store.getters.totalInCart }}
                            </div>
                        </div>
                        <span class="tracking-tight font-semibold">cart</span>
                        <div class="absolute top-10 left-0 z-20 pt-10 transform -translate-y-10 w-16" @mouseenter="showCart = true" @mouseleave="showCart = false">
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

                    <button v-if="!$store.getters.userinfo" class="flex items-center cursor-pointer" @click="$router.push('/login')" :class="[this.$route.name === 'Login' ? 'text-primary' : '']">
                        <span class="rounded-full text-3xl" :class="[this.$route.name === 'Login' ? 'material-icons' : 'material-icons-outlined']"> person </span>
                        <span class="block pl-2 pr-1 tracking-tight font-semibold">Login</span>
                    </button>
                    <button v-else :class="[this.$route.name === 'purchase' || this.$route.name === 'manageProfile' || this.$route.name === 'Address' ? 'text-primary rounded-full' : '']">
                        <router-link
                            :to="{
                                name: 'purchase',
                                params: { purchaseDetail: 'purchase' },
                            }"
                            class="flex items-center cursor-pointer"
                        >
                            <span class="rounded-full text-3xl" :class="[this.$route.name === 'purchase' || this.$route.name === 'manageProfile' || this.$route.name === 'Address' ? 'material-icons' : 'material-icons-outlined']">
                                person
                            </span>
                            <span class="block pl-2 pr-1 tracking-tight font-semibold">{{ $store.getters.userinfo === null ? "" : $store.getters.userinfo.username }}</span>
                        </router-link>
                    </button>
                </div>
            </div>
        </div>

        <div class="fixed bottom-0 bg-white dark:bg-dark_secondary w-full h-16 sm:hidden text-xs tracking-tighter px-4 py-0.5 z-50 select-none">
            <div class="flex justify-around h-full items-center">
                <button class="flex flex-col items-center w-16 p-1 font-semibold" @click="$router.push('/')" :class="[this.$route.name === 'Home' ? 'bg-primary rounded-full text-white' : '']">
                    <!-- <div class="material-icons">local_mall</div> -->
                    <img v-show="this.$route.name === 'Home'" src="../assets/orange.svg" alt="orange_icon" class="max-h-6" />
                    <div v-show="this.$route.name !== 'Home'" :class="[this.$route.name === 'Home' ? 'material-icons text-primary' : 'material-icons-outlined']">home</div>
                    <span class="">home</span>
                </button>
                <button class="flex flex-col items-center w-16 p-1 font-semibold">
                    <div class="material-icons">
                        <!-- apps -->
                        <!-- manage_search -->
                        grid_view
                    </div>
                    <span class="">categories</span>
                </button>
                <button class="flex flex-col items-center w-16 p-1 font-semibold" @click="$router.push('/cart')" :class="[this.$route.name === 'Cart' ? 'bg-primary rounded-full text-white' : '']">
                    <div :class="[this.$route.name === 'Cart' ? 'material-icons' : 'material-icons-outlined']">shopping_cart</div>
                    <span class="">cart</span>
                </button>

                <button v-if="!$store.getters.userinfo" class="flex items-center cursor-pointer" @click="$router.push('/login')" :class="[this.$route.name === 'Login' ? 'bg-primary rounded-full text-white' : '']">
                    <div class="flex flex-col items-center w-16 p-1 font-semibold">
                        <span :class="[this.$route.name === 'Login' ? 'material-icons' : 'material-icons-outlined']"> person </span>
                        <span class="">login</span>
                    </div>
                </button>

                <router-link
                    :to="{
                        name: 'purchase',
                        params: { purchaseDetail: 'purchase' },
                    }"
                    v-else
                    @click="this.$store.commit('setShowAccountPage', true)"
                    :class="[this.$route.name === 'purchase' || this.$route.name === 'manageProfile' || this.$route.name === 'Address' ? 'bg-primary rounded-full text-white' : '']"
                >
                    <div class="flex flex-col items-center w-16 p-1 font-semibold">
                        <div :class="[this.$route.name === 'purchase' || this.$route.name === 'manageProfile' || this.$route.name === 'Address' ? 'material-icons' : 'material-icons-outlined']">
                            person
                        </div>
                        <span class="">account</span>
                    </div>
                </router-link>
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
