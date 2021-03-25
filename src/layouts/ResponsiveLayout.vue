<template>
  <q-layout class="bg-dark" view="lHh Lpr lFf">

    <Header/>
    <Drawer/>

    <q-footer class="bg-dark q-pa-md" style="height: 100px" v-if="false">
      <q-scroll-area class="fit" horizontal>
        <q-tabs active-bg-color="accent" class="text-h4" indicator-color="transparent">
          <q-route-tab :key="n" class="q-ma-md bg-secondary" to="" v-for="n in 6">
            <q-icon name="wind_turbine"/>
          </q-route-tab>
        </q-tabs>
      </q-scroll-area>
    </q-footer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import Header from 'components/Header.vue';
  import Drawer from 'components/Drawer.vue';

  export default defineComponent({
    // name: 'LayoutName',
    components: {
      Header, Drawer
    },


    setup() {
      return { leftDrawer: false };
    }
  });
</script>
<style>
</style>
