<template>
  <div id="q-app">
    <router-view :key="$store.state.api.masterUri"/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { icons } from 'assets/icons/import-icons'
import { icons as styleIcons } from 'assets/icons/styled/import-styled'

export default defineComponent({
  name: 'App',
  created(): void {
    // this.$axios.defaults.baseURL = `http://${this.$store.state.api.masterUri}/`;
    // console.log(this.$axios.defaults.baseURL);
    this.$axios.interceptors.response.use((response) => {
      return response
    }, error => {
      console.log(error)
      if (error.response.status === 401) {
        this.$store.commit('login/resetToken')
        this.$router.push('/login').catch(e => {
          console.log(e.message)
        })
      }
    })

    this.$store.dispatch('api/changeMaster').catch(e => {
      console.log(e.message)
    })

    this.$q.iconMapFn = (iconName => {
      let passName = iconName
      if (passName in styleIcons) {
        return { icon: styleIcons[passName] }
      }

      if (passName in icons) {
        return { icon: icons[passName] }
      }
      passName = 'vortex_' + iconName
      if (passName in icons) {
        return { icon: icons[passName] }
      }
    })

    this.$store.commit('time/setPhases')
    setInterval(() => {
      this.$store.commit('time/setPhases')
    }, 10000)
  }
})
</script>
<style>
body {
  font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
