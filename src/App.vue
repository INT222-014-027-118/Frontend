<template>
    <div class="">
        <nav-bar></nav-bar>
        <router-view class="mt-12 sm:mt-20 md:mt-20 lg:mt-20 mb-20" />
        <!-- <Footer class="h-20 bg-gray-300 text-center w-full" v-if="this.$route.name !== 'Login' && this.$route.name !== 'Register'">footer</Footer> -->
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import Footer from './components/Footer.vue'
export default {
    components: {
        NavBar,
        // Footer
    },
    data() {
        return {
            changeMode: Boolean,
        };
    },
    methods: {
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
    created() {
        this.$store.dispatch("loadUserData");
        this.mode();
    },
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
