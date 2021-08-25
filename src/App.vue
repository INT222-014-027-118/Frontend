<template>
    <div class="">
        <nav-bar :change="changeMode" @switch-mode="switchMode"></nav-bar>
        <router-view class="mt-12 sm:mt-20 md:mt-20 lg:mt-28 mb-20" />
        <Footer class="h-20 bg-gray-300 text-center w-full" v-if="this.$route.name !== 'Login' && this.$route.name !== 'Register'">footer</Footer>
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from './components/Footer.vue'
export default {
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            changeMode: Boolean,
        };
    },
    methods: {
        switchMode() {
            this.changeMode = !this.changeMode;
            if (this.changeMode == false) {
                localStorage.theme = "light";
                document.getElementById("light");
            } else {
                localStorage.theme = "dark";
                document.getElementById("dark");
            }
            this.mode();
        },
        mode() {
            if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
                this.changeMode = true;
                document.documentElement.classList.add("dark");
            } else {
                this.changeMode = false;
                document.documentElement.classList.remove("dark");
            }
        },
    },
    created() {
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
