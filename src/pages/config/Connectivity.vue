<template>
  <q-page class="text-white text-center column" padding>
    <!-- content -->
    <Logo class="text-h4"/>
    <div class="q-pa-md"/>
    <div class="text-center row justify-center">
      <form @submit.prevent.stop="onSubmit" class="col-12 q-pa-md text-h5" style="max-width: 12em">
        <q-input color="secondary" dark label="Nombre de equipo" v-model="data.hostname"/>
        <q-select :options="data.options.modeOptions" color="secondary" dark label="Modo de trabajo"
                  v-model="data.mode"/>
        <q-select :options="wifiOptions" @filter="filterFn" color="secondary" dark label="SSID"
                  v-if="data.mode.value === 'sta'" v-model="data.ssid"/>
        <q-input color="secondary" dark label="SSID" v-else v-model="data.ssid"/>
        <q-input color="secondary" dark label="Contraseña" type="password" v-model="data.password"/>
        <q-select :options="data.options.ipOptions" color="secondary" dark label="Asignacion de ip"
                  v-model="data.ipMode"/>
        <q-input  color="secondary" dark label="Direccion IP"
                 v-model="data.ipAddress"/>
        <div class="text-center q-pa-md">
          <q-btn color="secondary"
                 icon="save" label="guardar" outline
                 style="width: 12em" type="submit"/>
        </div>
      </form>
    </div>
  </q-page>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  let mode: any = '';
  export default defineComponent({
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
              { value: 'auto', label: 'Automático' },
              { value: 'manual', label: 'Manual' }],
            modeOptions: [
              { label: 'Punto de acceso', value: 'ap' },
              { label: 'Estación', value: 'sta' }
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
          dhcp: (<any>this.data.ipMode).value === 'auto',
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
      filterFn(val: any, update: any) {
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
    computed: {},
    created(): void {
      this.getNetworks().catch(e => {
        console.log(e.message);
      });
    }
  });
</script>
<style lang="scss">
  /*.q-field__native {
    color: $secondary !important;
  }*/
</style>
