<template>
    <AppLayout>
        <div class="w-full container mx-auto">
            <Docnav />
            <div>
                <Search />
            </div>
            
        </div>

    </AppLayout>
</template>
  
<script>
import AppLayout from '../../components/AppLayout.vue';
import Docnav from '../../components/doctor/Docnav.vue';
import Search from '../../components/doctor/Search.vue'
export default {
    components: {
        AppLayout, Docnav, Search
    }
}
</script>
  
<style></style>