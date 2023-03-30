<template>
    <AppLayout>
        <div class="w-full mx-auto">
            <adminnav />
            <Table />
        </div>
    </AppLayout>
</template>
  
<script>
import AppLayout from "../../components/AppLayout.vue";
import adminnav from '../../components/admin/Nav.vue'
import Table from '../../components/admin/Table.vue'
export default {
    components: {
        AppLayout,
        adminnav, 
        Table
    },
    data() {
        return {

        };
    },
    // methods:{
    //     fetchAlldates: function(){
    //         axios.post()
    //     }
    // },
    // created: function () {

    // },
};
</script>
  
<style></style>
  