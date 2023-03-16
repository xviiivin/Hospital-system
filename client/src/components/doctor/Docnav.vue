<template>
    <Nav class="w-full flex justify-between px-10 py-2">
        <div class="flex items-center">
            <img class="w-10 h-10 mr-3" src="../../assets/Navbar/Logo.png" alt="" />
            <p class="text-xl font-normal curcer mt-[3px]">{{ LogoName }}</p>
        </div>
        <div class="flex">
            <img class="w-10 h-10 mr-3" src="../../assets/Navbar/Logo.png" alt="" />
        </div>
    </Nav>
</template>

<script>
export default {
    data() {
        return {
            LogoName: "W&N",
        };
    },
};
</script>

<style></style>
