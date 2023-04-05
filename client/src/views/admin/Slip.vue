<template>
    <div class="w-full">
        <adminnav />
        <div class="w-full mx-auto mt-10 flex flex-wrap gap-2 gap-y-12">
            <div v-for="(value, index) in slip" :key="index">
              <div class="text-justify justify-center w-fit">
                <div
                  class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl">
                  <div class="px-5 pb-5">
                    <!-- <img :src="" alt=""> -->
                
                    <div class="flex items-center justify-between">
                      <img src="../../assets/bin.png" class="py-4" @click="removeRole(value.idCard)" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>
import adminnav from "../../components/admin/Nav.vue";
export default {
    data(){
        return{
            slip:[]
        }
    },
    components: { adminnav },
}
</script>
<style></style>