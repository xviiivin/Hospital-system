<template>
    <AppLayout>
        <div class="w-full mx-auto">
            <adminnav />



        </div>
    </AppLayout>
</template>
  
<script>
import AppLayout from "../../components/AppLayout.vue";
import adminnav from '../../components/admin/Nav.vue'
export default {
    components: {
        AppLayout,
        adminnav
    },
    data() {
        return {

        };
    },
};
</script>
  
<style></style>
  