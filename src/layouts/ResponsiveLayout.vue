<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="text-h6">
        <q-btn icon="menu" class="text-h6" round flat dense @click="leftDrawer = !leftDrawer"/>
        <q-space/>
        <q-icon class="text-h4" name="battery-charging" style="margin-right: 1rem"/>
        <q-btn class="text-h6" icon="help" flat dense round/>
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>

    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      show-if-above
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-2"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm bg-secondary text-white row">
        <!-- Content here -->
        <div class="col flex">
          <q-space/>
          <q-btn icon="close" color="primary" text-color="white" round flat v-if="$q.screen.lt.md"
                 @click="leftDrawer = false"/>
        </div>
        <div class="col flex flex-center bg-primary q-ma-md q-pa-sm" v-for="n in 6" :key="n">
          hello
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { fasPooStorm } from '@quasar/extras/fontawesome-v5';

  export default defineComponent({
    // name: 'LayoutName',
    data() {
      return {
        fasPooStorm
      };
    },

    setup() {
      return { leftDrawer: false };
    }
  });
</script>
