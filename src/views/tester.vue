<template>
    <div class="py-10">
        <div class="max-w-sm mx-auto relative">
            <div class="inline-block relative w-full ">
                <button
                    type="button"
                    class="w-full flex text-left justify-between items-center px-3 py-2 text-black transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed bg-white border-gray-300"
                    value="Option A"
                    @click="showOption = !showOption"
                >
                    <span class="block truncate ">{{ choosed == "" ? "pleas select" : choosed }}</span
                    ><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current flex-shrink-0 ml-1 h-4 w-4 text-gray-600">
                        <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div
                class="absolute top-12 w-full z-40 -mt-1 border-b border-gray-300 border-l border-r rounded-b shadow-sm transition ease-in duration-75 opacity-100 bg-white"
                :class="[showOption ? 'visible' : 'invisible']"
            >
                <div class="inline-block w-full p-2 placeholder-gray-400">
                    <input
                        placeholder="Search..."
                        class="inline-block w-full px-3 py-2 bg-gray-50 text-sm rounded border focus:outline-none focus:shadow-outline border-gray-300"
                        v-model="text"
                        @keydown.enter="search"
                    />
                </div>
                <ul class="overflow-auto " style="max-height: 300px;">
                    <li data-type="option" class="cursor-pointer" :class="[check ? 'font-semibold bg-blue-600  text-white' : '']">
                        <div class="flex justify-between items-center px-3 py-2" v-for="(spec, index) in search" :key="spec" @click="selectToNa(index)">
                            <span class="truncate block ">{{ spec.spec }}</span>
                            <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4" :class="{ hidden: !spec.active }">
                                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                            </svg>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- <div v-for="s in search" :key="s">s.spec</div> -->
</template>

<script>
export default {
    data() {
        return {
            showOption: false,
            specs: [
                { spec: "spec1", active: false },
                { spec: "spec2", active: false },
                { spec: "spec3", active: false },
            ],
            choosed: "",
            text: "",
            check: Boolean,
        };
    },
    methods: {
        selectToNa(index) {
            for (let i = 0; i < this.search.length; i++) {
                if (i == index) {
                    this.search[i].active = true;
                    this.choosed = this.search[i].spec;
                } else {
                    this.search[i].active = false;
                }
            }
            this.showOption = false;
        },
        newObj(arr) {
            this.specs = arr;
        },
    },
    computed: {
        search() {
            let obj = this.specs.filter((t) => t.spec.toLowerCase().includes(this.text.toLowerCase()));
            return obj;
        },
    },
};
</script>

<style></style>
