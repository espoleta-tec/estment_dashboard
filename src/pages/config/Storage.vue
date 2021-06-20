<template>
  <q-page class="text-white column" padding>
    <!-- content -->
    <div class="row justify-evenly">
      <div class="col-6 column items-center">
        <span class="text-bold" style="font-size: 4em">{{freeMemory}}%</span>
        <FreeMemory :value="freeMemory"/>
      </div>
      <div :class="`col-12 col-sm-6 flex ${!$q.screen.gt.xs ? 'flex-center' : ''}  q-pa-md`">
        <div :key="n" class="col-auto text-uppercase" v-for="n in 1">
          <span class="text-body2">Capacidad Máxima</span><br/>
          <span class="text-secondary text-h6" style="font-weight: 300">16GB</span></div>
      </div>
    </div>
    <q-space/>
    <!--    <div class="col-12 flex flex-center" style="margin-bottom: 5em">-->
    <!--      <q-btn class="text-h5" color="secondary" label="borrar datos" unelevated/>-->
    <!--    </div>-->
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
        freeMemory: 0
      };
    },
    mounted(): void {
      this.$axios.get('/storage').then(resp => {
        console.log(resp);
      }).catch(e => {
        console.log(e.message);
      });
    }
  });
</script>
<style lang="scss">
</style>
