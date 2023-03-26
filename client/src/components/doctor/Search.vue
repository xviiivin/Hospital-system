<template>
    <div class="flex flex-col">
        <!-- search -->
        <div class="text-center mt-[5em] mb-[10px] text-2xl font-bold uppercase tracking-wide">Search patient</div>
        <div class="flex justify-center">
            <div
                class="flex text-gray-600 rounded-full border-2 border-gray-200 w-fit transition-all duration-500 items-center px-2">
                <input name="serch"
                    class="bg-white h-30 p-5 pr-10 rounded-full text-sm text-[1.4em] outline-none flex w-[300px] transition-all duration-700 focus:w-[600px]" />
                <button type="submit" class="bg-black py-2 rounded-full text-white px-5">Search</button>
            </div>
        </div>

        <!-- body -->
        <div class="mt-16 container mx-auto">
            <div class=" w-full flex px-4">
                <div class="w-1/3">
                    <div class="flex justify-between pb-4">
                        <p class="text-lg font-bold">Name</p>
                        <input type="number" disabled class="p-2 w-1/2 bg-black rounded-md">
                    </div>

                    <div class="flex justify-between py-4">
                        <p class="text-lg font-bold">Age</p>
                        <input type="number" disabled class="p-2 w-1/2 bg-black rounded-md">
                    </div>

                    <div class="flex justify-between py-4">
                        <p class="text-lg font-bold">Gender</p>
                        <input type="number" disabled class="p-2 w-1/2 bg-black rounded-md">
                    </div>

                    <div class="flex justify-between py-4">
                        <p class="text-lg font-bold">Weight</p>
                        <div class="flex w-1/2 rounded-md border p-2 border-black">
                            <input type="number" class="flex-grow w-1/2 focus:outline-none">
                            <p class='ml-2 text-[#9a9bad]'>KG</p>
                        </div>

                    </div>
                    <div class="flex justify-between py-4">
                        <p class="text-lg font-bold">Height</p>
                        <div class="flex w-1/2 rounded-md border p-2 border-black">
                            <input type="number" class="flex-grow w-1/2 focus:outline-none">
                            <p class='ml-2 text-[#9a9bad]'>CM</p>
                        </div>
                    </div>

                </div>
                <div class="w-2/3 px-4">
                    <!-- top -->
                    <div>
                        <div class=" bg-gray-300 w-full h-auto">
                            <div class="flex px-6 pt-6">
                                <p class="px-2 xl:text-xl md:text-lg text-sm font-bold ">Symptom:</p>
                                <textarea name="" id="" cols="90" rows="1"
                                    class="border-1 border-black rounded-xl h-72 text-lg p-4 focus:ring-black focus:border-black"
                                    placeholder="Patient symptom"></textarea>
                            </div>
                            <div class="flex justify-end px-5 xl:px-10 py-6">
                                <button class="bg-[#111727] border-2 boder-black text-white p-4 rounded-lg">
                                    Save symptom
                                </button>
                            </div>
                        </div>

                    </div>
                    <!-- bottom -->
                    <div class="mt-[20px] mb-[100px]">
                        <div class=" bg-gray-300 w-full h-auto  p-4 px-8">
                            <div class="grid grid-cols-6 gap-4">
                                <div class=" col-span-2">
                                    <p class="px-2 xl:text-xl md:text-lg text-sm font-bold ">Add medicine:</p>
                                </div>
                                <div class="xl:col-span-2 col-span-4">
                                    <div>

                                        <form class="flex items-center">
                                            <label for="simple-search" class="sr-only">Search</label>
                                            <div class="relative w-full">
                                                <div
                                                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                        fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <input type="text" id="simple-search"
                                                    class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5  "
                                                    placeholder="Search" required>
                                            </div>
                                            <button type="submit"
                                                class="p-2.5 ml-2 text-sm font-medium text-white bg-black rounded-lg borderg ">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg>
                                                <span class="sr-only">Search</span>
                                            </button>
                                        </form>

                                    </div>
                                </div>

                                <div class="xl:col-span-1 col-start-3 col-end-5">
                                    <input type="number"
                                        class="w-full h-auto border border-black focus:ring-black focus:border-black">
                                </div>
                                <div class="xl:col-span-1  col-start-5 col-end-7">
                                    <button class="w-full h-auto bg-black text-white p-2">Add pills</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-end px-5 xl:px-10 py-6">
                <button class="bg-[#111727] border-2 boder-black text-white p-4 rounded-lg">
                    Save All
                </button>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>

<style></style>