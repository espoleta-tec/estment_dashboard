<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header>
      <q-toolbar class="text-h6">
        <q-btn icon="moon" class="text-h6" round flat dense @click="leftDrawer = !leftDrawer"/>
        <q-space/>
        <q-icon class="text-h4" name="settings_filled" style="margin-right: 1rem"/>
        <q-btn class="text-h6" icon="sd_filled" flat dense round/>
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
      <q-scroll-area class="app-drawer fit q-pa-sm text-white row">
        <!-- Content here -->
        <div class="col flex">
          <q-space/>
          <q-btn icon="close" color="primary" text-color="white" round flat v-if="$q.screen.lt.md"
                 @click="leftDrawer = false"/>
        </div>
        <q-item @click="$router.push('/login')" clickable class="row no-wrap flex items-center q-ma-md q-pa-sm text-h5"
                v-for="n in 6" :key="n">
          <q-icon name="user_filled"/>
          <span style="margin-left: 0.2rem;">Usuario</span>
        </q-item>
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
<style lang="scss">
</style>
