<template >
    <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="pb-4 bg-white ">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="table-search" v-model="input"
                        class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-black focus:border-black "
                        placeholder="Search to find people">
                </div>
            </div>
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" class="p-4">
                        </th>
                        <th scope="col" class="px-6 py-3">
                            id
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Idcard
                        </th>
                        <th scope="col" class="px-6 py-3">
                            name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone number
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Slip
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- v-for="(value, index) in data" :key="index" -->
                    <tr v-for="(value, index) in filteredUsers" :key="index" class="bg-white border-b  hover:bg-gray-50 ">
                        <td class="w-4 p-4">
                            <div class="flex items-center">

                            </div>
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {{ index + 1 }}
                        </th>
                        <td class="px-6 py-4">
                            {{ value.idCard }}
                        </td>
                        <td class="px-6 py-4">
                            {{ value.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ value.phone }}
                        </td>
                        <td class="px-6 py-4">
                            {{ value.role }}
                        </td>
                        <!-- :to="{{  }}" -->
                        <router-link style="cursor: pointer; text-decoration: none" :to="`/slip/${value.id}`">
                            <td v-if='value.role !== "DOCTOR"'
                                class="px-6 py-4 underline underline-offset-2 hover:cursor-pointer">
                                click
                            </td>
                        </router-link>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: [],
            filteredUsers: [],
            input: ''
        }
    },

    mounted() {
        this.load()
    },

    methods: {
        async load() {
            const result = await axios.get("http://localhost:8080/api/user");
            this.data = result.data
            this.filteredUsers = result.data
        },

    },
    computed: {
        filteredUsers() {
            return this.data.filter(user => user.name.toLowerCase().includes(this.input.toLowerCase())
                || user.idCard.toLowerCase().includes(this.input.toLowerCase())
                || user.phone.toLowerCase().includes(this.input.toLowerCase()))
        }
    }

}
</script>
<style></style>