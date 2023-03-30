<template lang="">
    <div>
        <div class="mx-w-5xl mt-[40px]">
            <hr>
            <p class="text-2xl text-bold my-[30px] pl-[120px]">Add Role</p>
            <button class="absolute flex right-[100px] rounded-lg top-[150px] text-lg bg-black text-white px-4 py-2"
                @click="show = !show">Add doctor</button>
            <hr>
        </div>
        <div class="container mx-auto mx-w-5xl mt-[50px]  grid grid-cols-5 gap-2 gap-y-12">
            <div v-for="(value, index) in userInfo" :key="index">
                <!-- <div class="rounded-3xl w-[200px] h-[200px] bg-white drop-shadow-xl mx-[20px]"> -->
                    <div class="text-justify justify-center p-5">
                        <!-- <p class="px-4 py-2 font-semibold text-lg">{{ value.name }}</p>
                        <p class="px-4 py-2">id: {{ value.idCard }}</p>
                        <p class="px-4 py-2 text-light text-gray-600 text-sm">หมอทั่วไป</p>
                        <img src="../../assets/bin.png" class="ml-[80%] py-4" @click="removeRole(index);"> -->
                        
                        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  drop-shadow-xl">
                            <div class="px-5 pb-5">
                                    <h5 class="text-2xl py-3 underline font-semibold tracking-tight text-gray-900">{{ value.name }}</h5>
                                <span class="text-lg font-bold text-gray-900">Id: {{ value.idCard }}</span>

                                <div class="flex items-center justify-between">
                                    <span class="text-sm font-bold text-gray-900">หมอทั่วไป</span>
                                    <img src="../../assets/bin.png" class=" py-4" @click="removeRole(index);">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            <!-- </div> -->
        </div>


        <div class="absolute mx-w-5xl top-[0px] w-full h-screen flex items-center justify-center backdrop-blur-sm backdrop-brightness-50 "
            v-if="show">
            <div class="w-[500px] h-[360px] bg-white">
                <div class=" px-[30px] pt-[30px]">
                    <p class="font-semibold text-2xl">Add Account</p>
                    <p class="border-white hr2"></p>
                    <div class="mt-[20px] space-y-3">
                        <label class="font-light ">Name</label>
                        <input type="text" class="h-[37px] border-[1px] border-black rounded-xl p-2.5 w-[100%]"
                            v-model="inName">
                    </div>
                    <div class="mt-[20px] space-y-3">
                        <label class="font-light">Identification Number</label>
                        <input type="text" class="h-[37px] border-[1px] border-black rounded-xl p-2.5 w-[100%]"
                            v-model="inIdcard">
                    </div>
                    <div class="flex ml-[52%] mt-[30px] space-x-3">
                        <button class="bg-black rounded-2xl border-[1px] border-black px-7 py-1.5 text-white font-light"
                            @click="show = !show; addRole()">ยืนยัน</button>
                        <button class="rounded-2xl border-[1px] border-black px-7 py-1.5 font-light"
                            @click="show = !show">ยกเลิก</button>
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
            show: false,
            inName: '',
            inIdcard: '',
            userInfo: [
                {
                    id: '',
                    name: 'somchai',
                    idCard: '1212312',
                }
            ],
        };
    },
    methods: {
        addRole() {
            if (this.inName === '' || this.inIdcard === '') {
                this.$swal.fire(
                    'Please enter all inputs!',
                    'You clicked the button!',
                    'error')
            }
            else {
                this.userInfo.push({
                    name: this.inName,
                    idCard: this.inIdcard
                })
                this.$swal.fire(
                    'Add role done!',
                    'You clicked the button!',
                    'success'
                )
            }
        },
        removeRole(index) {
            this.userInfo.splice(index, 1);
        },

    },

}
</script>
<style lang="">
    
</style>