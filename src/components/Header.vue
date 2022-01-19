<template>
  <q-header class="bg-dark q-pa-sm">
    <q-toolbar class="text-h6 ">
      <q-btn @click="leftDrawer = !leftDrawer" class="q-pa-sm" dense flat icon="menu_filled" round/>
      <span>{{ $route.name }}</span>
      <!--      <span>{{$store.state.layout.currentView}}</span>-->
      <q-space/>
      <!--      <q-btn icon="arrows-fullscreen" round flat @click="requetsFullscreen"/>-->
      <div :key="n.text" class="row items-center content-center" style="margin-left: 1rem" v-for="n in notifications"
           v-show="false">
        <q-icon :name="n.icon" class="text-h6" style="margin-right: 1rem"/>
        <div class="text-body2 text-uppercase text-secondary">{{ n.text }}</div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'


export default defineComponent({
  // name: 'ComponentName'
  data() {
    return {
      notifications: [
        // { text: '21%', icon: 'sd_filled' },
        { text: '4-13/3', icon: 'moon' }
      ]
    }
  },
  computed: {
    leftDrawer: {
      get: function(): boolean {
        return this.$store.state.layout.leftDrawer
      },
      set: function(payload: boolean) {
        this.$store.commit('layout/toggleDrawer', payload)
      }
    }
  }
})
</script>
