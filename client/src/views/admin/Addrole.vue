<template>
    <div>
        <adminnav />
        <card/>
    </div>
</template>
  
<script>
import adminnav from '../../components/admin/Nav.vue'
import card from '../../components/admin/Card.vue'
export default {
    
    components: {
        adminnav,card
    },
};
</script>
  
<style scoped>
hr {
    border-top: 2px solid black;
    margin-top: 6px;
    margin-left: 100px;
    margin-right: 100px;
}

.hr2 {
    border-top: 2px solid #F3EFE7;
    margin-top: 6px;
    background-position: left bottom;

}
</style>