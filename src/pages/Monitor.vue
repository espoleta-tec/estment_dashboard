<template>
  <div class="column">
    <!-- content -->
    <div class="col row items-center">
      <div class="col flex flex-center">
        <q-icon name="weather_partly_cloudy_rain_filled" style="font-size: 20vh"/>
      </div>
      <div class="col column items-center">
        <div class="col text-secondary text-h1 flex flex-center q-ma-md">31°</div>
        <div class="col row">
          <q-space/>
          <MyGauge class="col-8" style="max-width: 200px" v-model="0.8"/>
          <q-space/>
        </div>
      </div>
    </div>
    <div class="col-1 q-pa-md"/>
    <div class="col row text-h6 q-ma-md text-uppercase">
      <div class="col row text-center">
        <div class="col-12 flex flex-center items-center content-center">
          <div class="col row no-wrap" style="max-width: 10em">
            <q-icon :key="n.icon" :name="n.icon" :style="idx !== selected ? 'opacity: 0.4' : ''"
                    class="col" v-for="(n, idx) in moonPhases"/>
          </div>
        </div>
        <div class="col-12 no-wrap text-secondary">14-19 mar</div>
      </div>
      <div class="col row items-center content-center">
        <div class="col-12 text-body2 text-uppercase text-center">Generacion</div>
        <div class="col-12 flex flex-center no-wrap">
          <Helix/>
          <div class="text-secondary">1.8W</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import MyGauge from 'components/MyGauge.vue';

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
