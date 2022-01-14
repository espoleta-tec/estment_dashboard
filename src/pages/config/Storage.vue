<template>
  <q-page class="text-white column" padding>
    <!-- content -->
    <div class="row justify-evenly">
      <div class="col-6 column items-center">
        <span class="text-bold" style="font-size: 4em">{{ formatted }}%</span>
        <FreeMemory :value="freeMemory"/>
      </div>
      <div :class="`col-12 col-sm-6 column q-pa-lg ${!$q.screen.gt.xs ? '' : ''}`">
        <div class="col-auto text-uppercase">
          <span class="text-body2">Espacio Usado</span><br/>
          <span class="text-secondary text-h6" style="font-weight: 300">{{ freeMemoryFormat(used) }}</span></div>
        <div class="col-auto text-uppercase">
          <span class="text-body2">Capacidad Máxima</span><br/>
          <span class="text-secondary text-h6" style="font-weight: 300">{{ freeMemoryFormat(total) }}</span></div>
      </div>
    </div>
    <q-space/>
    <div class="column content-center">
      <!--      <a :href="`${$axios.defaults.baseURL}logs-global`" style="text-decoration: none"-->
      <!--         :download="`lecturas_${new Date().toISOString()}.txt`">-->
      <!--      </a>-->
      <q-btn @click="requestDownload" class="q-pr-md q-pl-md text-h6" color="secondary" label="Descargar Lecturas"/>
      <div style="height: 20px"></div>
      <q-btn @click="formatSDCard" class="q-pr-md q-pl-md text-h6" color="negative" label="Borrar SD"/>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import FreeMemory from 'components/FreeMemory.vue'

export default defineComponent({
  // name: 'PageName'
  components: {
    FreeMemory
  },
  data() {
    return {
      used: 0,
      total: 0
    }
  },
  mounted(): void {
    this.$axios.get('/storage').then(resp => {
      console.log(resp.data)
      this.used = resp.data.used
      this.total = resp.data.total
    }).catch(e => {
      console.log(e.message)
    })
  },
  computed: {
    freeMemory() {
      let result: number
      result = this.used / this.total * 100
      if (isNaN(result)) {
        result = 0
      }
      return result
    },
    formatted(): string {
      return this.freeMemory.toFixed(0)
    }
  },
  methods: {
    freeMemoryFormat(sizeInBytes: number) {
      let i = -1
      let byteUnits = [' kB', ' MB', ' GB', 'TB', ' PB', 'EB']

      do {
        sizeInBytes = sizeInBytes / 1024
        i++
      } while (sizeInBytes > 1024)

      return Math.max(sizeInBytes, 0.1).toFixed(1) + byteUnits[i]
    },
    formatSDCard() {
      this.$q.dialog({
        title: 'Confirmar',
        message: 'Esta acción borrará todos los datos almacenados en la SD. Esta acción no es reversible',
        cancel: true
      }).onOk(() => {
        this.$axios.get('/format').then(resp => {
          console.log(resp.data)
          this.$q.notify({
            message: 'Borrando tarjeta sd',
            color: 'positive'
          })
        }).catch(e => {
          this.$q.notify({
            message: 'error al borrar tarjeta sd',
            color: 'negative'
          })
          console.log(e.message)
        })
      })
    },
    requestDownload() {
      this.$axios.get('/logs-global').then((response) => {
        const url = window.URL.createObjectURL(new Blob(([response.data])))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `lecturas_${new Date().toISOString()}.txt`)
        document.body.appendChild(link)
        link.click()
      }).catch((error) => console.log(error))
    }
  }
})
</script>
