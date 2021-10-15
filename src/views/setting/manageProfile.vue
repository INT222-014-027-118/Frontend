<template>
    <div>
        <h1 class="text-3xl font-semibold p-3">My Profile</h1>
        <hr />
        <form action="" class="px-3 py-4 ">
            <div class="space-y-5">
                <div class="sm:flex items-center mb-2">
                    <p class="font-semibold sm:w-2/6 sm:text-right pr-2">User name :</p>
                    <p class="lg:w-4/6 text-xl font-light">{{$store.getters.userinfo.username}}</p>
                </div>
                <div class="sm:flex items-center mb-2">
                    <p class="font-semibold sm:w-2/6 sm:text-right pr-2">full name :</p>
                    <p class="lg:w-4/6 text-xl font-light">{{$store.getters.userinfo.userFirstName}}  {{$store.getters.userinfo.userLastName}}</p>
                </div>
                <div class="sm:flex items-center mb-2">
                    <p class="font-semibold sm:w-2/6 sm:text-right pr-2">email address :</p>
                    <div class="flex w-full sm:w-4/6 justify-between items-center">
                        <p class="sm:w-3/6 text-xl font-light" v-show="!editEmail">{{$store.getters.userinfo.email}}</p>
                        <input
                            v-show="editEmail"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="ylg@company.com"
                            class="w-full sm:w-3/6 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                        <div class="w-1/6 mx-4">
                            <button type="button" @click="editEmail = !editEmail" class="rounded-md text-white px-3 py-2 bg-primary">{{ editEmail ? "Done" : "edit" }}</button>
                        </div>
                    </div>
                </div>
                <div class="sm:flex items-center mb-2">
                    <p class="font-semibold sm:w-2/6 sm:text-right pr-2">phone :</p>
                    <p class="lg:w-4/6 text-xl font-light">088888888888</p>
                </div>
                <div class="sm:flex items-center mb-2">
                    <p class="font-semibold sm:w-2/6 sm:text-right pr-2">password :</p>
                    <div class="flex w-full sm:w-4/6 justify-between items-center">
                        <p class="sm:w-3/6 text-xl font-light" v-show="!editPassword">*********</p>
                        <input
                            v-show="editPassword"
                            type="password"
                            placeholder="ylg@company.com"
                            class="sm:w-3/6 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        />
                        <div class="w-1/6 mx-4">
                            <button type="button" @click="editPassword = !editPassword" class="rounded-md text-white px-3 py-2 bg-primary">{{ editPassword ? "cancel" : "edit" }}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-7">
                <button type="button" class="px-4 py-2 text-white bg-primary rounded-md focus:bg-secondary focus:outline-none">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editEmail: false,
            editPassword: false,
        };
    },
};
</script>

<style></style>
