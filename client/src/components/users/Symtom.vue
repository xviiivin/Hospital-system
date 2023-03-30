<template>
    <div class="container mx-auto mt-5">
        <div>
            <div>
                <h1 class="text-2xl font-extrabold my-8 text-[#111727]">Hospital records</h1>
            </div>
            <div class="flex">
                <h2 class="text-xl mr-2 text-[#B6B6B6]">22/02/2566</h2>
                <a href="" class="text-xl text-black  font-medium underline">นายแพท พิทักษ์</a>
            </div>
        </div>

        <div class="mt-10">

            <div class="block w-full p-8 bg-[#FBFBFF] border border-black rounded-lg shadow ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-[#202C4B] ">Symtom</h5>
                <p class="font-normal text-[#202C4B]">Here are the biggest enterprise technology
                    acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>

        </div>


        <div>

            <div class="relative overflow-x-auto pt-12 rounded-lg">

                
                <table class="w-full text-sm text-left text-gray-500 rounded-lg">
                    <thead class="text-sm text-gray-700 uppercase bg-[#DEDEDE] ">
                        <tr>
                            <th scope="col" class="px-6 py-3 ">
                                Medicine name
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Take a day
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b" v-for="value, index in medi" :key="index">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {{ value.name }}
                            </th>
                            <td class="px-6 py-4">
                                {{ value.Quantity }}
                            </td>

                            <td class="px-6 py-4">
                                {{ value.Take }}
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>

    </div>
</template>
<script>

export default {
    data() {
        return {
            medi: [
                {
                    name: "Acetazolamide",
                    Quantity: "1",
                    Take: "22 piece per day"
                },

                {
                    name: "Acetazolamide2",
                    Quantity: "2",
                    Take: "12 piece per day"

                },

                {
                    name: "Acetazolamide3",
                    Quantity: "3",
                    Take: "2 piece per day"
                },

            ],
        }
    }
}
</script>
<style></style>