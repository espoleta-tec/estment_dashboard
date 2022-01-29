<template>
  <q-page class="text-white column items-center" padding>
    <logo class="text-h4"/>
    <div class="q-pa-lg"/>
    <q-input dark debounce="1000" label="IP de estación" style="width: 20em" v-model="masterUri"/>
    <q-btn :key="b.label" :label="b.label" @click="b.onClick" class="q-ma-md" color="secondary" style="width: 20em"
           v-for="b in buttons"/>
    <q-space/>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

const frequencies = [
  {
    label: '15m', value: 15
  }, {
    label: '30m', value: 30
  }, {
    label: '1h', value: 60
  }, {
    label: '2h', value: 60 * 2
  }, {
    label: '5h', value: 60 * 5
  }, {
    label: '10h', value: 60 * 10
  }, {
    label: '1d', value: 60 * 24
  }, {
    label: '1w', value: 60 * 24 * 7
  }
]

export default defineComponent({
  data: function() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm: any = this
    return {
      ip: '',
      buttons: [
        { label: 'establecer conexión', onClick: vm.testConn },
        { label: 'Sincronizar Fecha y Hora', onClick: vm.timeSync }
        // { label: 'resetear configuración', onClick: vm.resetConfiguration },
        // { label: 'Modo Ahorro', onClick: vm.activateSavingMode }
      ]
    }
  },
  mounted(): void {
    this.ip = this.getUri()
  },
  methods: {
    updateUri(value: string) {
      this.ip = value
      this.$store.commit('api/changeMasterUri', value)
      this.$store.dispatch('api/changeMaster').catch(e => {
        console.log(e.message)
      })
    },
    getUri() {
      return this.$store.state.api.masterUri
    },
    testConn() {
      this.$axios.get(`http://${this.$store.state.api.masterUri}/testconn`).then(resp => {
        console.log(resp.status)
        this.updateUri(this.$store.state.api.masterUri)
        this.$q.notify({
          message: 'Conexión establecida',
          color: 'positive',
          timeout: 1000,
          position: 'top'
        })
      }).catch(e => {
        console.log(e.message)
        this.$q.notify({
          message: e.message,
          color: 'negative',
          timeout: 1000,
          position: 'top'
        })
      })
    },
    timeSync() {
      this.$store.dispatch('api/syncTime').then(() => {
        this.$q.notify({
          message: 'Fecha y hora del dispositivo actualizadas con su terminal',
          color: 'positive'
        })
      }).catch(e => {
        console.log(e.message)
        this.$q.notify({
          message: `Error ${e.message}`,
          color: 'negative'
        })
      })
    },
    resetConfiguration() {
      this.$q.dialog({
        title: 'Confirmar',
        message: 'Esta acción restablecerá los valores por defecto del dispositivo. Está acción no es reversible',
        cancel: true
      }).onOk(() => {
        this.$axios.get('/reset').then(resp => {
          console.log(resp.data)
          this.$q.notify({
            message: 'valores de fábrica restablecidos',
            color: 'positive'
          })
        }).catch(e => {
          this.$q.notify({
            message: 'error al reestablecer valores de fábrica',
            color: 'negative'
          })
          console.log(e.message)
        })
      })
    },
    activateSavingMode() {
      this.$q.dialog({
        title: 'Confirmar',
        message: 'Activar modo ahorro?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.get('/battery/save').then(() => {
          this.$q.notify({
            message: 'Modo ahorro activado con exito',
            color: 'positive',
            position: 'top'
          })
        }).catch(() => {
          this.$q.notify({
            message: 'No es posible activar el modo ahorro',
            color: 'negative',
            position: 'top'
          })
        })
      }).onCancel(() => {
        console.log('Cancelled')
      })
    },
    async saveFreqs() {
      console.log(this.selectedFreq.value)
      const response = await this.$axios.post('/frequency', { frequency: this.selectedFreq.value }).catch(() => {
        this.$q.notify({
          message: 'Error al cambiar la frecuencia',
          color: 'negative',
          position: 'top'
        })
      })
      if (response) {
        this.$q.notify({
          message: 'Frecuencia cambiada con exito',
          color: 'positive',
          position: 'top'
        })
      }
    }
  },
  computed: {
    masterUri: {
      get() {
        return this.ip
      },
      set(value: string) {
        this.ip = value
        this.$store.commit('api/changeMasterUri', value)
      }
    }
  },
  setup() {
    return {
      frequencyOptions: frequencies,
      selectedFreq: ref(frequencies[0])
    }
  }
})
</script>
