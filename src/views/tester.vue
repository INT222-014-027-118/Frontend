<template>
    <div class="py-10">
        <div class="max-w-sm mx-auto relative">
            <div class="inline-block relative w-full ">
                <button
                    type="button"
                    class="w-full flex text-left justify-between items-center px-3 py-2 text-black transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed bg-white border-gray-300"
                    value="Option A"
                >
                    <span class="block truncate ">Option A</span
                    ><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current flex-shrink-0 ml-1 h-4 w-4 text-gray-600">
                        <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div class="absolute top-12 w-full z-40 -mt-1 border-b border-gray-300 border-l border-r rounded-b shadow-sm transition ease-in duration-75 opacity-100 bg-white">
                <div class="inline-block w-full p-2 placeholder-gray-400">
                    <input placeholder="Search..." class="inline-block w-full px-3 py-2 bg-gray-50 text-sm rounded border focus:outline-none focus:shadow-outline border-gray-300" />
                </div>
                <ul class="overflow-auto " style="max-height: 300px;">
                    <li data-type="option" class="cursor-pointer font-semibold bg-blue-600  text-white">
                        <div class="flex justify-between items-center px-3 py-2">
                            <span class="truncate block ">umdavidum/sfdf</span
                            ><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-4 w-4 ">
                                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
                            </svg>
                        </div>
                    </li>
                    <li data-type="option" class="cursor-pointer ">
                        <div class="flex justify-between items-center px-3 py-2"><span class="truncate block ">arindamaqualeaf/cssmarge</span></div>
                    </li>
                    <li data-type="option" class="cursor-pointer ">
                        <div class="flex justify-between items-center px-3 py-2"><span class="truncate block ">Colt/sdfsdfsdf</span></div>
                    </li>
                    <li data-type="option" class="cursor-pointer ">
                        <div class="flex justify-between items-center px-3 py-2"><span class="truncate block ">group2016/wowww</span></div>
                    </li>
                    <li data-type="option" class="cursor-pointer ">
                        <div class="flex justify-between items-center px-3 py-2"><span class="truncate block ">arindamaqualeaf/cssmarge</span></div>
                    </li>
                    <li data-type="option" class="cursor-pointer ">
                        <div class="flex justify-between items-center px-3 py-2"><span class="truncate block ">Colt/sdfsdfsdf</span></div>
                    </li>
                    <li data-type="option" class="cursor-pointer ">
                        <div class="flex justify-between items-center px-3 py-2"><span class="truncate block ">group2016/wowww</span></div>
                    </li>
                    <li data-type="option" class="cursor-pointer ">
                        <div class="flex justify-between items-center px-3 py-2"><span class="truncate block ">arindamaqualeaf/cssmarge</span></div>
                    </li>
                    <li data-type="option" class="cursor-pointer ">
                        <div class="flex justify-between items-center px-3 py-2"><span class="truncate block ">Colt/sdfsdfsdf</span></div>
                    </li>
                    <li data-type="option" class="cursor-pointer ">
                        <div class="flex justify-between items-center px-3 py-2"><span class="truncate block ">group2016/wowww</span></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
