<template>
  <q-drawer
    bordered
    class="relative-position"
    show-if-above
    side="left"
    v-model="leftDrawer">
    <!-- QScrollArea is optional -->
    <!--    <div class="bg-grey-3  absolute-full"/>-->
    <q-scroll-area class="fit text-dark bg-grey-2 text-white row">
      <!-- Content here -->
      <div class="col-12 text-dark">
        <div class="row no-wrap items-center absolute-top-right" style="height: auto; width: 100%">
          <!--          <q-btn @click="requetsFullscreen" flat icon="arrows-fullscreen" round/>-->
          <q-space/>
          <!--          <q-btn @click="leftDrawer = false" class="text-h6" color="primary" flat icon="close-circle-f" round-->
          <!--                 v-if="$q.screen.lt.md"/>-->
        </div>
        <Logo class="text-h5 q-ma-lg"/>
        <div class="q-pa-md"/>
        <q-item
          :class="`text-uppercase text-bold row no-wrap flex items-center
        text-h6 q-ma-md ${$route.path === n.to ? 'text-secondary bg-dark' : ''}`"
          :key="n.to"
          :style="`font-weight: 300; ${idx === drawerRoutes.length - 1 ? 'margin-top: 3rem': ''}`"
          :to="n.to" clickable
          v-for="(n, idx) in routesToShow">
          <q-icon :name="n.icon" class="q-pr-sm"/>
          <span style="margin-left: 0.2rem;">{{ n.name }}</span>
        </q-item>
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { AppFullscreen } from 'quasar'


export default defineComponent({
  // name: 'ComponentName'
  computed: {
    leftDrawer: {
      get: function() {
        return this.$store.state.layout.leftDrawer
      },
      set: function(payload) {
        this.$store.commit('layout/toggleDrawer', payload)
      }
    },
    drawerRoutes() {
      return [
        { to: '/', name: 'Tablero', icon: 'home_filled' },
        { to: '/user', name: 'usuario', icon: 'user_filled', loggedIn: true },
        // { to: '/sensors', name: 'sensores', icon: 'microchip' },
        { to: '/connectivity', name: 'conectividad', icon: 'wifi_router', loggedIn: true },
        { to: '/storage', name: 'almacenamiento', icon: 'sd_filled', loggedIn: true },
        { to: '/update', name: 'update', icon: 'folder-f', loggedIn: true },
        { to: '/settings', name: 'Ajustes', icon: 'settings_filled' },
        { to: '/about', name: 'Acerca de', icon: 'info_filled' }
      ]
    },
    routesToShow() {
      this.ticker
      return (this.drawerRoutes as any).filter((r: any) => {
        if (r.loggedIn) {
          return this.$store.state.api.ws?.readyState
        }
        return true
      })
    }
  },
  methods: {
    requetsFullscreen() {
      if (AppFullscreen.isActive) {
        AppFullscreen.exit().then().catch(err => console.log(err.message))
        return
      }
      AppFullscreen.request().then(() => {
        console.log('entered fullscreen')
      }).catch((err) => {
        console.log(err.message)
      })
    }
  },
  data() {
    return {
      ticker: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.ticker++
    }, 1000)
  }
})
</script>
<style lang="scss">
.bg-drawer {
  /*filter: blur(50px);*/
}
</style>
