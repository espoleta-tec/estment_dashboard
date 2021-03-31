<template>
  <q-page class="row text-white" padding>
    <!-- content -->
    <div class="col-6 column items-center q-gutter-md">
      <span class="text-bold" style="font-size: 10vw">{{freeMemory}}%</span>
      <FreeMemory :value="freeMemory"/>
    </div>
    <div class="col-6 column q-gutter-md q-pa-md">
      <div class="col-auto text-uppercase" v-for="n in 4">
        <span class="text-body2">Capacidad Maxima</span><br/>
        <span class="text-secondary text-h6" style="font-weight: 300">16GB</span></div>
    </div>
    <div class="col-12 flex flex-center">
      <q-btn class="text-h5" color="secondary" label="borrar datos" unelevated/>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import FreeMemory from 'components/FreeMemory.vue';

  export default defineComponent({
    // name: 'PageName'
    components: {
      FreeMemory
    },
    data() {
      return {
        freeMemory: 50
      };
    }
  });
</script>
<style lang="scss">
</style>
