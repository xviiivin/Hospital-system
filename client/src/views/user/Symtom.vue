<template>
    <AppLayout>
        <div class="w-full h-screen">
            <Nav />

            <symtom />
        </div>
    </AppLayout>
</template>
<script>
import Nav from "../../components/users/MainNav.vue";
import AppLayout from "../../components/AppLayout.vue";
import symtom from '../../components/users/Symtom.vue'
export default {
    components: {
        AppLayout,
        symtom,
        Nav
    }
}
</script>
<style></style>