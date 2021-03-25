<template>
  <q-tabs vertical active-bg-color="primary" indicator-color="transparent" class="bg-grey-9">
    <q-route-tab :to="t.to" class="q-item-section" v-for="t in navigationTabs" :key="t.label">
      <div class="flex flex-center text-white">{{t.label}}</div>
    </q-route-tab>
  </q-tabs>
</template>

<script lang="ts">
  export default {
    // name: 'ComponentName',
    data() {
      return {
        navigationTabs: [
          {to: '/monitor', label: 'Dashboard'},
          {to: '/state', label: 'Estado'},
          {to: '/sensors', label: 'Sensores'},
          {to: '/autonomy', label: 'Autonomia'},
          {to: '/localization', label: 'Localizacion'},
          {to: '/security', label: 'Seguridad'},
          {to: '/config', label: 'Configuracion'},
          {to: '/exit', label: 'Salir'}
        ]
      };
    },
    components: {
    }
  };
</script>

<style lang="scss">
  .q-item-section {
    border: solid 2px $grey-6;
  }
</style>
