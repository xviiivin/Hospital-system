<template>
    <Nav class="w-full">
        <div class="h-[80px] flex justify-between p-2">
            <div class="flex">
                <img class="w-[35px] h-[35px] mr-3" src="../../assets/Navbar/Logo.png" alt="" />
                <p class="text-xl font-normal curcer mt-[3px]">{{ LogoName }}</p>
            </div>
            <div class="flex">
                <img class="w-[35px] h-[35px] mr-3" src="../../assets/Navbar/Logo.png" alt="" />

            </div>
        </div>
    </Nav>
</template>

<script>
export default {
    data() {
        return {
            LogoName: 'W&N',
        }
    },
}
</script>

<style></style>