<template>
  <q-page class="text-white column items-center" padding>
    <logo class="text-h4"/>
    <div class="q-pa-lg"/>
    <q-input dark debounce="500" label="IP de estacion" v-model="masterUri"/>
    <q-btn @click="testConn" class="q-pa-sm q-ma-md" label="probar"/>
    <q-space/>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';


  export default defineComponent({
    data() {
      return {
        ip: this.getUri()
      };
    },
    methods: {
      getUri() {
        return this.$store.state.api.masterUri;
      },
      testConn() {
        this.$axios.get(`http://${this.$store.state.api.masterUri}/`).then(resp => {
          console.log(resp.status);
          this.$q.notify({
            message: 'Conexion establecida',
            color: 'positive',
            timeout: 1000,
            position: 'top'
          });
        }).catch(e => {
          console.log(e.message);
          this.$q.notify({
            message: 'No se pudo establecer conexion',
            color: 'negative',
            timeout: 1000,
            position: 'top'
          });
        });
      }
    },
    computed: {
      masterUri: {
        get() {
          return this.ip;
        },
        set(value: string) {
          this.ip = value;
          this.$store.commit('api/changeMasterUri', value);
        }
      }
    }
  });
</script>
