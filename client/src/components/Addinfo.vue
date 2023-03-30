<template>
    <div>
        <div class="grid grid-cols-2 gap-10">
            <div class="">
                <div v-for="(value, index) in left" :key="index" class="pb-8 text-lg font-bold">
                    {{ value }}
                </div>
            </div>
            <div>
                <div class="pb-4">
                    <input class='w-full' type="text">
                </div>
                <div class="pb-4">
                    <input class='w-full' type="text">
                </div>
                <div class="pb-4">
                    <input class='w-full' type="text">
                </div>
                
                <div class="pb-4">
                    <select id="underline_select"
                        class="block py-2.5 px-2 w-full text-sm text-black bg-white  border-0 border-b-2   focus:outline-none focus:ring-0 focus:border-black peer">
                        <option selected>Choose your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div>
                    <textarea name="" class='w-full' id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            left: ['Name', 'Age', 'Genders', 'Expert', 'Discription']
        }
    },

    methods: {

    }
}
</script>

<style></style>