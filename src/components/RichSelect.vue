<template>
    <div class="relative">
        <div class="inline-block relative w-full">
            <button
                type="button"
                class="w-full flex text-left justify-between items-center px-3 py-2 text-black transition duration-100 ease-in-out border rounded shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed bg-white border-gray-300"
                value="Option A"
                @click="showOP"
            >
                <span class="block truncate" :class="[choosed === '' ? 'text-gray-400' : ' text-black']">{{ choosed == "" ? "please select" : choosed }}</span
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
            class="absolute top-12 w-full z-40 -mt-1 border rounded-md border-primary shadow-lg transition ease-in duration-75 opacity-100 bg-white"
            :class="[showOption ? 'visible' : 'invisible']"
        >
            <div class="w-full p-2 placeholder-gray-400 flex items-center">
                <input
                    placeholder="Search..."
                    class="inline w-full px-3 py-2 h-9 bg-gray-50 text-sm rounded-md border focus:outline-none focus:shadow-outline border-gray-300"
                    v-model="text"
                    ref="inputText"
                />
                <div class="" v-show="showAdd">
                    <button type="button" class="bg-green-600 px-2 py-2 ml-2 h-9 rounded-md text-white text-sm" @click="AddOption">Add</button>
                </div>
            </div>
            <ul class="overflow-auto rounded-sm" style="max-height: 300px;">
                <li
                    data-type="option"
                    class="cursor-pointer hover:bg-yellow-200"
                    v-for="(spec, index) in search"
                    :key="spec"
                    :class="[spec.active ? 'font-semibold bg-primary text-white hover:bg-primaryfocus' : '']"
                >
                    <div class="flex justify-between items-center px-3 py-2" @click="selectToNa(index)" v-if="spec.show">
                        <span class="truncate block ">{{ spec.spec }}</span>
                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4" :class="{ hidden: !spec.active }">
                            <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                        </svg>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{

    },
    data() {
        return {
            showOption: false,
            showAdd: false,
            specs: [
                { spec: "spec1", active: false, show: true },
                { spec: "spec2", active: false, show: true },
                { spec: "spec3", active: false, show: true },
            ],
            choosed: "",
            text: "",
        };
    },
    methods: {
        selectToNa(index) {
            for (let i = 0; i < this.search.length; i++) {
                if (i == index) {
                    this.search[i].active = true;
                    this.choosed = this.search[i].spec;
                    this.$emit("selected", this.choosed);
                } else {
                    this.search[i].active = false;
                }
            }
            this.showOption = false;
        },
        showOP() {
            this.showOption = !this.showOption;
            setTimeout(() => {
                this.$refs.inputText.focus();
            }, 500);
        },
        AddOption() {
            if (!this.text == "" && !this.text == this.specs.filter((t) => t.spec.toLowerCase().includes(this.text.toLowerCase()))) {
                let newOp = { spec: this.text, active: false, show: true };
                this.specs.push(newOp);
            }
        },
    },
    computed: {
        search() {
            this.specs.map((t) => {
                if (!t.spec.toLowerCase().includes(this.text.toLowerCase())) {
                    t.show = false;
                    this.showAdd = true;
                } else {
                    t.show = true;
                    this.showAdd = false;
                }
            });
            return this.specs;
        },
    },
};
</script>

<style></style>
