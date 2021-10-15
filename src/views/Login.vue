<template>
    <div class="flex items-cente">
        <div class="container mx-auto">
            <div class="max-w-md mx-auto my-10">
                <div class="text-center">
                    <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
                    <p class="text-gray-500 dark:text-gray-400">Sign in to access your account</p>
                </div>
                <div class="m-7">
                    <form @submit.prevent="login">
                        <div class="mb-6">
                            <label for="username" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Username</label>
                            <input
                                v-model="username"
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Username"
                                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
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
                            <button type="submit" class="w-full px-3 py-4 text-white bg-primary rounded-md focus:bg-secondary focus:outline-none">Sign in</button>
                        </div>
                        <p class="text-sm text-center text-gray-400 " >
                            Don&#x27;t have an account yet? <a @click="$router.push('/register')" class="cursor-pointer text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign up</a>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            username:'',
            password:''
        }
    },
    methods: {
        login(){
            axios
                .post(`${process.env.VUE_APP_API}/authenticate`,{userName:this.username,userPassword:this.password})
                .then(response => {
                    if(response.status === 200){
                        let userinfo = response.data
                        localStorage.setItem('token',userinfo.jwtToken) 
                        localStorage.setItem('userId',userinfo.user.id)
                        this.$store.commit('SET_USERINFO', userinfo.user);
                        this.$router.push('/')
                    }
                })
                .catch(error => {
                    alert('Fail!')
                    console.log(error)
                })
        }
    },


};
</script>

<style></style>
