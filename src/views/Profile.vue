<template>
    <div class="flex p-1 py-3 mx-auto max-w-7xl ">
        <div class="fixed md:hidden" @click="changetShowAccountPage" v-show="!this.$store.getters.showAccountPage">back</div>
        <div :class="[this.$store.getters.showAccountPage ? 'w-full md:w-3/12' : 'hidden md:block']" class="mx-1 w-full overflow-hidden md:w-3/12 top-20 px-3 py-3 bg-white dark:bg-dark_tertiary rounded-md shadow-md h-full">
            <div class="">
                <div class="flex items-center ">
                    <div class="self-start py-1">
                        <!-- <img
                        class="object-cover w-20 h-20 p-1 border-2 rounded-full border-primary md:w-24 md:h-24"
                        src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        alt="profile"
                    /> -->
                        <span class="w-14 h-14 text-5xl text-center border-2 rounded-full material-icons border-primary"> person </span>
                    </div>
                    <div class="w-full ml-2 overflow-hidden overflow-ellipsis">
                        <div class="md:flex md:flex-wrap md:items-center">
                            <h2 class="inline-block mb-2 font-light lg:text-xl sm:mr-5 sm:mb-0 truncate">
                                {{ $store.getters.userinfo === null ? "" : $store.getters.userinfo.username }}
                            </h2>
                            <!-- <a href="#" class="block px-2 py-0.5 text-sm font-semibold text-center text-white bg-primary rounded md:inline-block">Edit</a> -->
                            <router-link
                                :to="{
                                    name: 'manageProfile',
                                    params: { manage: 'account' },
                                }"
                                @click="changetShowAccountPage"
                                class="block px-2 py-0.5 text-sm font-semibold text-center text-white bg-primary rounded md:inline-block"
                                >Edit</router-link
                            >
                        </div>
                    </div>
                </div>
                <div class="px-1 py-3 border-b">
                    <p class="text-base md:text-xl uppercase font-semibold">point : {{ $store.getters.userinfo === null ? "" : $store.getters.userinfo.points }}</p>
                </div>
            </div>

            <div class="">
                <div class="pt-5 pb-4 px-1 space-y-5">
                    <router-link
                        :to="{
                            name: 'manageProfile',
                            params: { manage: 'account' },
                        }"
                        @click="changetShowAccountPage"
                        class="hover:text-primary flex font-semibold capitalize"
                        :class="[this.$route.name === 'manageProfile' ? 'md:text-primary hover:text-primaryfocus' : '']"
                        ><span class="material-icons-outlined text-center w-14 md:w-16 ">manage_accounts</span>
                        <span class="ml-1">my account</span>
                    </router-link>
                    <router-link
                        :to="{
                            name: 'Address',
                            params: { address: 'address' },
                        }"
                        @click="changetShowAccountPage"
                        class="hover:text-primary flex font-semibold capitalize items-center"
                        :class="[this.$route.name === 'Address' ? 'md:text-primary hover:text-primaryfocus' : '']"
                    >
                        <span class="material-icons-outlined text-center w-14 md:w-16 ">location_on</span>
                        <span class="ml-1">address</span>
                    </router-link>
                    <router-link
                        :to="{
                            name: 'purchase',
                            params: { purchaseDetail: 'purchase' },
                        }"
                        @click="changetShowAccountPage"
                        class="hover:text-primary flex font-semibold capitalize"
                        :class="[this.$route.name === 'purchase' ? 'md:text-primary hover:text-primaryfocus' : '']"
                        ><span class="material-icons-outlined text-center w-14 md:w-16 ">inventory</span>
                        <span class="ml-1">purchase</span>
                    </router-link>
                    <hr />
                    <div class="flex items-center flex-wrap cursor-pointer select-none " @click="changeSetChangeMode()">
                        <div class="flex justify-center w-14 md:w-16">
                            <div class="rounded-full w-11 h-6 p-0.5 ring-2 " :class="[this.$store.getters.changeMode == true ? 'bg-neutral ring-primary' : 'bg-dark_secondary ring-gray-200']">
                                <div
                                    class="rounded-full w-5 h-5 transform duration-300 ease-in-out flex items-center justify-center ring-1 "
                                    :class="[this.$store.getters.changeMode == true ? '-translate-x-0 bg-white text-primary ring-gray-300' : 'translate-x-5 bg-gray-700 text-blue-300 ring-gray-500']"
                                >
                                    <span class="material-icons-round text-base">{{ this.$store.getters.changeMode == true ? "wb_sunny" : "dark_mode" }}</span>
                                </div>
                            </div>
                        </div>
                        <span class="font-semibold capitalize ml-1">{{ this.$store.getters.changeMode == true ? "light mode" : "dark mode" }}</span>
                    </div>
                    <hr />
                    <button @click="logout" class="hover:text-red-500 flex capitalize font-bold">
                        <span class="material-icons-outlined text-center w-14 md:w-16 ">logout</span>
                        <span class="ml-1">Logout</span>
                    </button>
                </div>
            </div>
        </div>

        <router-view class="mx-1 top-20 px-3 py-3 bg-white dark:bg-dark_tertiary rounded-md shadow-md h-full" :class="[!this.$store.getters.showAccountPage ? 'block  w-full md:w-9/12' : 'hidden md:block md:w-9/12']" />
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        changetShowAccountPage() {
            this.$store.commit("setShowAccountPage");
        },
        changeSetChangeMode() {
            this.$store.commit("setChangeMode");
            if (this.$store.getters.changeMode == true) {
                localStorage.theme = "light";
                document.getElementById("light");
            } else {
                localStorage.theme = "dark";
                document.getElementById("dark");
            }
            this.mode();
        },
        logout() {
            if (window.confirm("Are you sure?")) {
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                this.$store.commit("SET_USERINFO", null);
                this.$router.push("/");
            }
        },
        mode() {
            if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                this.$store.commit("setChangeMode", false);
                document.documentElement.classList.add("dark");
            } else {
                this.$store.commit("setChangeMode", true);
                document.documentElement.classList.remove("dark");
            }
        },
    },
    mounted() {},
};
</script>

<style>
.dark:root {
    color-scheme: dark;
}
.light:root {
    color-scheme: light;
}
</style>
