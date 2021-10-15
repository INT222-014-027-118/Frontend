<template>
    <div class="flex items-center">
        <div class="container mx-auto">
            <div class="max-w-md mx-auto my-10">
                <div class="text-center">
                    <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Register</h1>
                    <p class="text-gray-500 dark:text-gray-400">Regis your account</p>
                </div>
                <div class="m-7">
                    <form @submit.prevent="register">
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <label for="firstname" class="text-sm text-gray-600 dark:text-gray-400">First name</label>
                            </div>
                            <input
                                v-model="firstname"
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="Your first name"
                                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <label for="lastname" class="text-sm text-gray-600 dark:text-gray-400">Last name</label>
                            </div>
                            <input
                                v-model="lastname"
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder="Your last name"
                                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <label for="username" class="text-sm text-gray-600 dark:text-gray-400">Username</label>
                            </div>
                            <input
                                v-model="username"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Your username"
                                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                            </div>
                            <input
                                v-model="password"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Your Password"
                                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Confirm Password</label>
                            </div>
                            <input
                                v-model="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Your Password"
                                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input
                                v-model="email"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="you@company.com"
                                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                        </div>
                        <div class="mb-6">
                            <button type="submit" class="w-full px-3 py-4 text-white bg-primary rounded-md focus:bg-secondary focus:outline-none">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
        };
    },
    methods: {
        register() {
            let data = {
                id: 1,
                username:this.username,
                userFirstName:this.firstname,
                userLastName:this.lastname,
                password:this.password,
                email:this.email,
                points:0
            };
            axios
                .post(`${process.env.VUE_APP_API}/registerNewUser`,data)
                .then(response => {
                    console.log(response);
                    if(response.status === 200){
                        alert('Succeed')
                        this.$router.push('/login')
                    }
                })
                .catch(error=>{
                    console.log(error);
                })
                
        },
    },
    created() {},
};
</script>

<style></style>
