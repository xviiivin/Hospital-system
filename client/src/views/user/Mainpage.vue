<template>
    <AppLayout>
        <Nav />
        <div class="bg-[#111727]">
            <div class="h-24 p-4 container mx-auto">
                <router-link style="cursor: pointer; text-decoration: none" to="/">
                    <img src="../../assets/back 1@2x.png" alt="" class="w-8 cursor-pointer" />
                </router-link>
            </div>

        </div>
        <div class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]">
            <!-- body -->
            <div class="relative h-full w-full md:w-2/3 xl:w-1/3 flex rounded-t-3xl bg-white">
                <div class="w-full h-2/3 mt-0">
                    <div class="h-full w-full overflow-hidden rounded-t-3xl">
                        <img class="h-[600px] w-full translate-y-[-80px] scale-150 object-cover" src="../../assets/room.png" />
                        <div class="absolute top-0 h-full w-full flex bg-[#D9D9D9] rounded-t-3xl opacity-50"></div>
                    </div>

                    <div class="absolute top-[10%] text-4xl inline-flex pl-[8%]">
                        <p class="text-[#6F6565] mr-5">Welcome, </p>
                        <p class="font-medium">Justin</p>
                    </div>

                    <div class="absolute flex justify-center top-[140px] w-full space-x-10">
                        <div class="cursor-pointer" @click="this.$router.push('/Payment')">
                            <div class="flex bg-[#202C4B] w-[100px] h-[100px] rounded-full shadow-lg ">
                                <img class="w-15 h-15 mx-7 self-center" src="../../assets/wallet.png">
                            </div>
                            <p class="mt-2 font-light">รายการชำระเงิน</p>
                        </div>
                        <div class="cursor-pointer" @click="this.$router.push('/')">
                            <div class="flex bg-[#202C4B] w-[100px] h-[100px] rounded-full">
                                <img class="w-15 h-15 self-center mx-6" src="../../assets/medical-record.png">
                            </div>
                            <p class="mt-2 font-light">ประวัติการรักษา</p>
                        </div>
                    </div>
                </div>

                <!-- body-bottom -->
                <div class="w-full h-[45%] absolute bottom-0 rounded-t-3xl bg-white">
                    <div class="relative mt-0.5">
                        <p class="font-medium text-lg ml-8 my-5">โรงพยาบาลที่เข้าร่วม</p>
                        <div class="grid grid-cols-8 gap-y-4 gap-x-10">
                            <div class="col-start-2 col-end-4">
                                <div class="rounded-2xl w-[150px] h-[150px] bg-white group drop-shadow-xl overflow-hidden ">
                                    <div class="text-justify justify-center h-full w-full ">
                                        <img class=" h-full w-full group-hover:scale-110 ease-in  duration-300" src="../../assets/ktp-hos.png">
                                    </div>
                                    <div class="rounded-b-xl bg-[#202C4B] opacity-[90%] h-10 absolute w-full bottom-0 group-hover:scale-110 ease-out duration-300">
                                            <div class="text-[#FFFFFF] text-center">
                                                <p class=" text-sm">krungthep Hospital</p>
                                            </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-start-5 col-end-7">
                                <div class="rounded-2xl w-[150px] h-[150px] bg-white group drop-shadow-xl overflow-hidden ">
                                    <div class="text-justify justify-center h-full w-full ">
                                        <img class=" h-full w-full group-hover:scale-110 ease-in duration-300" src="../../assets/ktp-hos.png">
                                    </div>
                                    <div class="rounded-b-xl bg-[#202C4B] opacity-[90%] h-10 absolute w-full bottom-0 group-hover:scale-110 ease-out duration-300">
                                            <div class="text-[#FFFFFF] text-center">
                                                <p class="text-sm">krungthep Hospital</p>
                                            </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </AppLayout>
</template>
  
  

  
<script>
import AppLayout from '../../components/AppLayout.vue';
import Nav from '../../components/users/MainNav.vue'
export default {
    components: {
        AppLayout, Nav
    }
}
</script>
  
<style></style>