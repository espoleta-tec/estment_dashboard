<template>
  <div class="row">
    <div class="col-12 row items-stretch">
      <div class="col-12 row">
        <div class="col-6 column items-stretch justify-center">
          <div class="col-auto q-pa-md row no-wrap">
            <q-icon :key="n.icon" :name="n.icon" :style="idx !== $store.state.time.currentMoon ? 'opacity: 0.2' : ''"
                    class="col" v-for="(n, idx) in moonPhases"/>
          </div>
          <div class="col-auto no-wrap text-secondary text-uppercase text-center">
            {{ $store.getters['time/currentCycle'] }}
          </div>
        </div>
        <div class="col-6 text-secondary text-h1 flex flex-center">{{ Math.floor($store.state.api.temperature_c) }}°</div>
      </div>
      <div class="col-6 column">
        <div class="col flex flex-center">
          <q-icon :name="$store.getters['api/climateIcon']" style="font-size: 20vh"/>
        </div>
        <div class="col-1"/>
      </div>
      <div class="col-6 column items-center">
        <MyGauge :value="$store.state.api.humidity/100" class="col" style="max-width: 100px"/>
        <div class="col flex flex-center no-wrap">
          <q-icon class="text-h4 q-pa-md" name="dew_point"/>
          <div class="text-secondary">{{ $store.state.api.dew_point_c }}°</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MyGauge from 'components/MyGauge.vue'

export default defineComponent({
  // name: 'PageName',
  components: {
    MyGauge
  },
  data() {
    return {
      selected: 2,
      moonPhases: [
        { icon: 'luna nueva' },
        { icon: 'moon_creciente' },
        { icon: 'moon_llena' },
        { icon: 'moon_menguante' }
      ]
    }
  }
})
</script>
