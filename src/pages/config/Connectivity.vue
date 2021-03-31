<template>
  <q-page class="text-white" padding>
    <!-- content -->
    <Logo class="text-h4"/>
    <div class="q-pa-md"/>

    <form @submit.prevent.stop="onSubmit" class="q-pa-md text-h5 q-gutter-md">
      <q-input label="Nombre de equipo" color="secondary" dark v-model="hostname"/>
      <q-select label="Modo de trabajo"  color="secondary" dark v-model="mode" :options="options.modeOptions"/>
      <q-select v-if="mode.value === 'sta'" label="SSID"  color="secondary" dark v-model="ssid" :options="wifiOptions"/>
      <q-input v-else label="SSID" color="secondary" dark v-model="ssid"/>
      <q-input label="Contraseña" color="secondary" dark v-model="password" type="password"/>
      <q-select label="Asignacion de ip"  color="secondary" dark v-model="ipMode" :options="options.ipOptions"/>
      <q-input :disable="ipMode.value === 'auto'" label="Direccion IP"  color="secondary" dark v-model="ipAddress"/>
      <div class="text-center q-pa-md">
        <q-btn class="text-h4" type="submit" color="secondary" flat icon="save" round/>
      </div>
    </form>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    // name: 'PageName'
    data() {
      return {
        isMounted: false,
        hostname: '',
        mode: '',
        ssid: '',
        password: '',
        ipMode: '',
        ipAddress: '',
        options: {
          ipOptions: [
            {value: 'auto', label: 'Automatico'},
            {value: 'manual', label: 'Manual'}],
          modeOptions: [
            {label: 'Punto de acceso', value: 'ap'},
            {label: 'Estacion', value: 'sta'},
          ]
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('ok')
      }
    },
    computed: {
      wifiOptions() {
        return ['ESPOLETA', 'WIFI ETECSA', 'NAUTA HOGAR']
      }
    }
  });
</script>
<style lang="scss">
  /*.q-field__native {
    color: $secondary !important;
  }*/
</style>
