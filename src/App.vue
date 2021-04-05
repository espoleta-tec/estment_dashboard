<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { icons } from 'assets/icons/import-icons';
  import { icons as styleIcons } from 'assets/icons/styled/import-styled';

  export default defineComponent({
    name: 'App',
    created(): void {
      this.$axios.interceptors.response.use((response) => {
        return response;
      }, error => {
        if (error.response.status === 401) {
          this.$store.commit('login/resetToken');
        }
      });

      this.$q.iconMapFn = (iconName => {
        let passName = iconName;
        if (passName in styleIcons) {
          return { icon: styleIcons[passName] };
        }

        if (passName in icons) {
          return { icon: icons[passName] };
        }
        passName = 'vortex_' + iconName;
        if (passName in icons) {
          return { icon: icons[passName] };
        }
      });

      const ws = new WebSocket('ws://localhost:8999');
      ws.onopen = () => {
        console.log('websocket connection opened');
        ws.send('vue client connected');
        ws.onmessage = (event) => {
          console.log(event.data);
          if (!event.data.startsWith('temp')) return;
          this.$store.commit('data/updateState', event.data);
        };
      };
    }
  });
</script>
<style>
  body {
    font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
</style>
