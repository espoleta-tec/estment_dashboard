<template>
  <q-toolbar class="bg-dark row">
    <!--    <q-btn flat @click="leftDrawer = !leftDrawer" round dense icon="menu"/>-->
    <div class="col-4 q-ma-md column content-center" style="width: 250px">
      <div class="flex items-end q-ma-xs">
        <q-img src="~assets/img/tornado.png" width="30px" contain ratio="1"/>
        <div class="column">
          <q-space/>
          <div class="text-h5 text-bold col" style="margin-left: 5px">TORNADO</div>
        </div>
      </div>
      <div class="text-secondary flex flex-center text-h6">
        Cargando...
      </div>
    </div>
    <div class="col-1"/>
    <div class="col row content-between">
      <div class="col column text-body1">
        <span>Identificacion</span>
        <span>...</span>
      </div>
      <div class="col column">
        <span>Hardware</span>
        <span>...</span>
        <span>Firmware Version</span>
        <span>...</span>
      </div>
      <q-space/>
      <div class="flex flex-center items-end">
        <q-img src="~assets/img/full_battery_32px.png" ratio="1" width="30px"/>
      </div>
    </div>
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // name: 'ComponentName',
  data() {
    return {
      loadingProgress: 1
    }
  },
  computed: {
    leftDrawer: {
      get(): boolean {
        return this.$store.state.layout.leftDrawer
      },
      set(payload: boolean) {
        console.log(payload)
        this.$store.commit('layout/toggleDrawer', payload)
      }
    }
  }
})</script>
