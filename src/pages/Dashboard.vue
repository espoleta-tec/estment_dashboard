<template>
  <q-page class="column text-white" padding>
    <!-- content -->
    <!--    <meter-bar rounded color="temperature-gradient" v-model="progress" width="3rem"/>-->
    <div class="col row items-center">
      <div class="col flex flex-center">
        <q-icon name="weather_partly_cloudy_rain_filled" style="font-size: 20vh"/>
      </div>
      <div class="col column items-center">
        <div class="col text-secondary text-h1 flex flex-center q-ma-md">31°</div>
        <div class="col row">
          <q-space/>
          <MyGauge class="col-8" style="max-width: 200px" v-model="humidity"/>
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
    <div class="col-2 row text-h3" style="margin-top: 2rem" v-show="false">
      <q-btn :key="elem.text" class="col text-h5"
             flat v-for="elem in twoBar">
        <q-icon :name="elem.icon"/>
        <div class="q-ma-md"/>
        <div class="text-secondary text-body1 text-no-wrap">{{elem.text}}</div>
      </q-btn>
    </div>
    <div class="col-2 row">
      <div :key="elem.text" class="col-4 col-sm-3 col-lg-2 col-xl-1 row q-pa-sm" v-for="elem in fourthBar">
        <q-btn class="col-12 text-h6 q-pa-md" :to="elem.to" outline v-ripple:secondary>
          <div class="column items-center q-gutter-md">
            <q-icon :name="elem.icon"/>
            <div class="text-secondary text-body2 text-no-wrap">{{elem.text}}</div>
          </div>
        </q-btn>
      </div>
    </div>
    <div class="q-pa-sm"/>
  </q-page>
</template>

<script lang="ts">
  import MeterBar from 'components/MeterBar.vue';
  import { defineComponent } from '@vue/composition-api';
  import { colors } from 'quasar';
  import MyGauge from 'components/MyGauge.vue';
  import Helix from 'components/Helix.vue';

  export default defineComponent({
    name: 'PageName',
    components: {
      MeterBar, MyGauge, Helix
    },
    data() {
      return {
        temp: 0.5,
        humidity: 0.8,
        colors,
        twoBar: [],
        fourthBar: [
          { text: 'ESTE', icon: 'vane', to: '/wind' },
          { text: '5 m/s', icon: '032-windsock', to: '/wind' },
          { text: '1002hpa', icon: 'barometer', to: '/pressure' },
          { text: '1.8 W', icon: 'wind_turbine', to: '/wind' },
          { text: '70mm', icon: '028-drop', to: '/precipitation' },
          { text: '254 lum', icon: '022-sunrise' }
        ],
        selected: 1,
        moonPhases: [
          { icon: 'luna nueva' },
          { icon: 'moon_creciente' },
          { icon: 'moon_llena' },
          { icon: 'moon_menguante' }
        ]
        // gaugeColors: [
        //   { offset: 0, color: '#808080' },
        //   { offset: 100, color: '#00d6fc' }
        // ]
      };
    }

  });
</script>
<style lang="scss">
  $theBorder: solid rgba(255, 255, 255, 0.1) 1px;
  .splitSession {
    border-top: $theBorder;
    border-bottom: $theBorder;
  }

  .verticalSplit {
    border-left: $theBorder;
    border-right: $theBorder;
  }

  .leftSplit {
    border-left: $theBorder;
  }

  /*.q-btn:hover {
    background: $secondary !important;
  }

  .q-btn:hover div {
    color: white !important;
  }
   */
</style>
