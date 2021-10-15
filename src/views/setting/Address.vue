<template>
    <div>
        <h1 class="text-3xl font-semibold p-3 capitalize">address</h1>
        <hr />
        <div class="px-3 py-4">
            <div class="flex" :class="[showForm ? 'flex-row-reverse' : 'flex-row']">
                <button
                    type="button"
                    class="px-4 py-2 text-white rounded-md focus:outline-none capitalize"
                    :class="[showForm ? 'bg-red-500' : 'bg-primary hover:bg-primaryfocus']"
                    @click="showForm = !showForm"
                >
                    {{ showForm ? "cancel" : "+ add" }}
                </button>
            </div>
            <div v-show="!showForm" v-for="(address, index) in addresses" :key="address" class="border p-3 mt-4 relative">
                <div class="absolute top-0 right-5 cursor-pointer text-red-500 p-2 font-semibold" @click="removeAddress(index)">remove</div>
                <p class="capitalize">name : {{ address.firstname }} {{ address.lastanme }}</p>
                <p class="capitalize">phone : {{ address.phone }}</p>
                <p class="capitalize">
                    address : {{ address.address == "" ? "" : ` ${address.address}, ` }}{{ address.sub_district == "" ? "" : `${address.sub_district}, ` }}
                    {{ address.district == "" ? "" : `${address.district}, ` }}{{ address.province == "" ? "" : `${address.province}, ` }}
                    {{ address.postal_code == "" ? "" : `${address.postal_code}` }}
                </p>
            </div>
        </div>
        <div v-show="showForm">
            <form @submit.prevent="addAddress" class="px-3 py-4 ">
                <div class="space-y-5">
                    <div class="sm:flex items-center mb-2">
                        <label for="fname" class="font-semibold block sm:w-2/6 sm:text-right pr-2">first name :</label>
                        <input
                            v-model="formAddress.firstname"
                            type="text"
                            id="fname"
                            maxlength="50"
                            name="fname"
                            class="w-full sm:w-3/6 border px-3 py-2 border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>
                    <div class="sm:flex items-center mb-2">
                        <label for="lname" class="font-semibold block sm:w-2/6 sm:text-right pr-2">last name :</label>
                        <input
                            v-model="formAddress.lastanme"
                            type="text"
                            id="lname"
                            maxlength="50"
                            name="lname"
                            class="w-full sm:w-3/6 border px-3 py-2 border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>
                    <div class="sm:flex items-center mb-2">
                        <label for="phone" class="font-semibold block sm:w-2/6 sm:text-right pr-2">phone :</label>
                        <input
                            v-model="formAddress.phone"
                            type="tel"
                            id="phone"
                            minlength="10"
                            maxlength="10"
                            pattern="[0]{1}[0-9]{9}"
                            name="phone"
                            class="w-full sm:w-3/6 border px-3 py-2 border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>
                    <div class="sm:flex items-center mb-2">
                        <label for="province" class="font-semibold block sm:w-2/6 sm:text-right pr-2">province :</label>
                        <input
                            v-model="formAddress.province"
                            type="text"
                            id="province"
                            maxlength="50"
                            name="address-level1"
                            class="w-full sm:w-3/6 border px-3 py-2 border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>
                    <div class="sm:flex items-center mb-2">
                        <label for="city" class="font-semibold block sm:w-2/6 sm:text-right pr-2">district / city :</label>
                        <input
                            v-model="formAddress.district"
                            type="text"
                            id="city"
                            maxlength="50"
                            name="address-level2"
                            class="w-full sm:w-3/6 border px-3 py-2 border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>
                    <div class="sm:flex items-center mb-2">
                        <label for="suburb" class="font-semibold block sm:w-2/6 sm:text-right pr-2">Sub-district :</label>
                        <input
                            v-model="formAddress.sub_district"
                            type="text"
                            id="suburb"
                            maxlength="50"
                            name="suburb"
                            class="w-full sm:w-3/6 border px-3 py-2 border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>
                    <div class="sm:flex items-center mb-2">
                        <label for="postal" class="font-semibold block sm:w-2/6 sm:text-right pr-2">postal :</label>
                        <input
                            v-model="formAddress.postal_code"
                            type="text"
                            id="postal"
                            minlength="5"
                            maxlength="5"
                            name="postal-code"
                            class="w-full sm:w-3/6 border px-3 py-2 border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>
                    <div class="sm:flex items-center mb-2">
                        <label for="address" class="font-semibold block sm:w-2/6 sm:text-right pr-2">address :</label>
                        <textarea
                            v-model="formAddress.address"
                            type="text"
                            id="address"
                            maxlength="150"
                            name="address-line1"
                            class="w-full sm:w-3/6 border px-3 py-2 border-gray-300 rounded-md focus:outline-none"
                        />
                    </div>
                </div>

                <div class="mt-7">
                    <button type="submit" class="px-4 py-2 text-white bg-primary rounded-md hover:bg-primaryfocus focus:outline-none">Save</button>
                </div>
                <!-- {{ formAddress }} -->
                <!-- {{ addresses }} -->
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showForm: false,
            formAddress: {
                firstname: "",
                lastanme: "",
                phone: "",
                province: "",
                district: "",
                sub_district: "",
                postal_code: "",
                address: "",
            },
            addresses: [],
        };
    },
    methods: {
        addAddress() {
            let newAddress = {};
            Object.assign(newAddress, this.formAddress);
            this.addresses.push(newAddress);
            this.showForm = false;
            this.resetForm();
        },
        removeAddress(index) {
            this.addresses.splice(index, 1);
        },
        resetForm() {
            this.formAddress.firstname = "";
            this.formAddress.lastanme = "";
            this.formAddress.phone = "";
            this.formAddress.province = "";
            this.formAddress.district = "";
            this.formAddress.sub_district = "";
            this.formAddress.postal_code = "";
            this.formAddress.address = "";
        },
    },
};
</script>

<style scpoed></style>
