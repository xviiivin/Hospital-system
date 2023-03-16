<template>
    <div class="flex flex-col">
        <!-- search -->
        <div class="text-center mt-[3em] mb-[30px] text-4xl font-bold uppercase tracking-wide">
            Search patient
        </div>
        <div class="flex justify-center ">
            <div
                class="flex text-gray-600 h-[80px] rounded-full border-2 border-gray-200 w-fit transition-all duration-500 items-center px-4">
                <input type="search" name="serch"
                    class="bg-white h-30 p-5 pr-10 rounded-full text-sm text-[1.6em] outline-none flex w-[300px] transition-all  duration-700 focus:w-[600px]">
                <button type="submit" class=" bg-black h-[50px] rounded-full text-white px-5">
                    Search
                </button>
            </div>
        </div>

        <!-- body -->
        <div class="mt-16 container mx-auto">
            <div class=" w-full flex">
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
                            <input type="number" class="flex-grow  focus:outline-none">
                            <p class='ml-2 text-[#9a9bad]'>KG</p>
                        </div>

                    </div>
                    <div class="flex justify-between py-4">
                        <p class="text-lg font-bold">Height</p>
                        <div class="flex w-1/2 rounded-md border p-2 border-black">
                            <input type="number" class="flex-grow  focus:outline-none">
                            <p class='ml-2 text-[#9a9bad]'>CM</p>
                        </div>
                    </div>

                </div>
                <div class="w-2/3 px-4">
                    <!-- top -->
                    <div>
                        <div class=" bg-gray-300 w-full h-auto">
                            <div class="flex px-6 pt-6">
                                <p class="px-2 text-xl font-bold ">Symptom:</p>
                                <textarea name="" id="" cols="90" rows="1"
                                    class="border-1 border-black rounded-xl h-72 text-lg p-4"
                                    placeholder="Patient symptom"></textarea>
                            </div>
                            <div class="flex justify-end px-16 py-6">
                                <button class="bg-[#111727] border-2 boder-black text-white p-4 rounded-lg">
                                    Save
                                </button>
                            </div>
                        </div>

                    </div>

                    <!-- bottom -->
                    <div class="mt-[20px] mb-[100px]">
                        <div class="flex">
                            <div class="flex  bg-gray-300 w-full">
                                <p class="px-8 pt-8 text-xl font-bold ">Add medicine:</p>
                                <div class="p-4 flex">

                                    <div
                                        class="flex text-gray-600 bg-white  rounded-full border-2 border-gray-200 w-fit  items-center px-4">
                                        <input type="search" name="serch"
                                            class="bg-white  p-5 pr-10 rounded-full  outline-none flex  text-lg">
                                        <button type="submit" class="h-[40px] bg-black  rounded-full text-white px-5">
                                            Search
                                        </button>
                                    </div>

                                    <input type="text">

                                    <button>
                                        ฟหกฟหก
                                    </button>
                                </div>

                                <div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
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