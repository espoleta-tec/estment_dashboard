<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header class="bg-dark q-pa-sm">
      <q-toolbar class="text-h6 ">
        <q-btn icon="menu_filled" class="text-h6" round flat dense @click="leftDrawer = !leftDrawer"/>
        <q-space/>
        <div class="row items-center content-center" style="margin-left: 1rem" v-for="n in notifications"
             :key="n.text">
          <q-icon :name="n.icon" class="text-h6" style="margin-right: 1rem"/>
          <div class="text-body2 text-uppercase text-secondary">{{n.text}}</div>
        </div>
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="bg-dark q-pa-md" style="height: 100px" v-if="false">
      <q-scroll-area horizontal class="fit" >
        <q-tabs class="text-h4" indicator-color="transparent" active-bg-color="accent">
          <q-route-tab to="" v-for="n in 6" :key="n" class="q-ma-md bg-secondary">
            <q-icon name="wind_turbine"/>
          </q-route-tab>
        </q-tabs>
      </q-scroll-area>

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

  export default defineComponent({
    // name: 'LayoutName',
    data() {
      return {
        notifications: [
          // { text: '21%', icon: 'sd_filled' },
          { text: '4-13/3', icon: 'moon' }
        ]
      };
    },

    setup() {
      return { leftDrawer: false };
    }
  });
</script>
<style>
</style>
