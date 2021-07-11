<template>
  <q-page class="text-white column" padding>
    <!-- content -->
    <div class="row justify-evenly">
      <div class="col-6 column items-center">
        <span class="text-bold" style="font-size: 4em">{{formatted}}%</span>
        <FreeMemory :value="freeMemory"/>
      </div>
      <div :class="`col-12 col-sm-6 column q-pa-lg ${!$q.screen.gt.xs ? '' : ''}`">
        <div class="col-auto text-uppercase">
          <span class="text-body2">Espacio Usado</span><br/>
          <span class="text-secondary text-h6" style="font-weight: 300">{{freeMemoryFormat(used)}}</span></div>
        <div class="col-auto text-uppercase">
          <span class="text-body2">Capacidad Máxima</span><br/>
          <span class="text-secondary text-h6" style="font-weight: 300">{{freeMemoryFormat(total)}}</span></div>
      </div>
    </div>
    <q-space/>
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
      }
    }
  })
</script>
<style lang="scss">
</style>
