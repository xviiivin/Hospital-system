<template>
    <AppLayout>
        <Nav />
        <div class="bg-[#111727]">
            <div class="h-24 p-4 container mx-auto">
                <router-link style="cursor: pointer; text-decoration: none" to="/pending">
                    <img src="../../assets/back 1@2x.png" alt="" class="w-8 cursor-pointer" />
                </router-link>
            </div>
        </div>
        <div class="w-full h-full flex flex-col items-center flex-grow bg-[#111727]">
            <!-- top -->

            <!-- body -->
            <div class="relative h-full w-full md:w-2/3 xl:w-1/3 flex items-center rounded-t-3xl bg-white">
                <div class="w-full h-full p-7">
                    <div class="mb-32">
                        <payment2 />
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
    
<script>
import AppLayout from "../../components/AppLayout.vue";
import Nav from "../../components/users/MainNav.vue";
import payment1 from "../../components/users/Gopayment.vue";
import payment2 from "../../components/users/Gopayment2.vue";
export default {
    components: {
        AppLayout,
        Nav,
        payment1,
        payment2
    },
};
</script>
    
<style></style>
    