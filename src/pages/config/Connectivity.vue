<template>
  <q-page class="text-white" padding>
    <!-- content -->
    <Logo class="text-h4"/>
    <div class="q-pa-md"/>

    <form @submit.prevent.stop="onSubmit" class="q-pa-md text-h5 q-gutter-md">
      <q-input color="secondary" dark label="Nombre de equipo" v-model="data.hostname"/>
      <q-select :options="data.options.modeOptions" color="secondary" dark label="Modo de trabajo" v-model="data.mode"/>
      <q-select :options="wifiOptions" @filter="filterFn" color="secondary" dark label="SSID"
                v-if="data.mode.value === 'sta'" v-model="data.ssid"/>
      <q-input color="secondary" dark label="SSID" v-else v-model="data.ssid"/>
      <q-input color="secondary" dark label="Contraseña" type="password" v-model="data.password"/>
      <q-select :options="data.options.ipOptions" color="secondary" dark label="Asignacion de ip"
                v-model="data.ipMode"/>
      <q-input :disable="data.ipMode.value === 'auto'" color="secondary" dark label="Direccion IP"
               v-model="data.ipAddress"/>
      <div class="text-center q-pa-md">
        <q-btn class="text-h4" color="secondary" flat icon="save" round type="submit"/>
      </div>
    </form>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  let mode: any = '';
  export default defineComponent({
    // name: 'PageName'
    data() {
      return {
        wifiOptions: [],
        data: {
          hostname: '',
          mode,
          ssid: '',
          password: '',
          ipMode: '',
          ipAddress: '',
          options: {
            ipOptions: [
              { value: 'auto', label: 'Automatico' },
              { value: 'manual', label: 'Manual' }],
            modeOptions: [
              { label: 'Punto de acceso', value: 'ap' },
              { label: 'Estacion', value: 'sta' }
            ]
          }
        },
        isMounted: false
      };
    },
    methods: {
      onSubmit() {
        let form = {
          ssid: this.data.ssid,
          password: this.data.password,
          mode: this.data.mode.value == 'ap',
          ip: this.data.ipAddress,
          gateway: this.data.ipAddress
        };

        this.$axios('net', {
          method: 'POST',
          data: form
        }).catch(e => {
          console.log(e.message);
          this.$q.notify({
              message: e.message,
              color: 'negative'
            }
          );
        });
      },
      filterFn(val: any, update: any, abort: any) {
        if (this.wifiOptions.length > 0) {
          update();
          return;
        }

        update(() => {
          this.getNetworks().catch(e => {
            console.log(e.message);
          });
        });
      },
      async getNetworks() {
        let response: any = await this.$axios.get('/wifis').catch(e => {
          console.log(e.message);
          return;
        });
        this.wifiOptions = response.data;
        console.log(this.wifiOptions);
      }
    },
    computed: {
      // wifiOptionsComputed() {
      //   this.$axios.get('/wifis').then((response: any) => {
      //     console.log(response);
      //     return response.data;
      //   }).catch((e) => {
      //     console.log(e.message);
      //     return [];
      //   });
      // }
    }
  });
</script>
<style lang="scss">
  /*.q-field__native {
    color: $secondary !important;
  }*/
</style>
