<template>
  <div class="row">
    <!-- content -->
    <div class="col-12 row items-stretch">
      <div class="col-6 column">
        <div class="col column items-stretch justify-center">
          <div class="col-auto q-pa-md row no-wrap">
            <q-icon :key="n.icon" :name="n.icon" :style="idx !== selected ? 'opacity: 0.4' : ''"
                    class="col" v-for="(n, idx) in moonPhases"/>
          </div>
          <div class="col-auto no-wrap text-secondary text-center">14-19 mar</div>
        </div>
        <div class="col flex flex-center">
          <q-icon name="weather_partly_cloudy_rain_filled" style="font-size: 20vh"/>
        </div>
        <div class="col-1"/>
      </div>
      <div class="col-6 column items-center">
        <div class="col-auto text-secondary text-h1 flex flex-center">{{$store.state.data.temperature}}</div>
        <MyGauge class="col" style="max-width: 100px" :value="0.8"/>
        <div class="col flex flex-center no-wrap">
          <Helix/>
          <div class="text-secondary">1.8W</div>
        </div>
        <div class="col flex flex-center no-wrap">
          <q-icon name="radiation" class="text-h4 q-pa-md"/>
          <div class="text-secondary">8 W/m</div>
        </div>
      </div>
      <!--      <div class="col-12 bg-yellow row text-h6 text-uppercase">-->

      <!--        <div class="col column items-center">-->

      <!--          <div class="col row">-->
      <!--            <q-space/>-->
      <!--            <q-space/>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      <div class="col-12">-->

      <!--        <div class="col row items-center content-center">-->

      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
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
      };
    }
  });
</script>
