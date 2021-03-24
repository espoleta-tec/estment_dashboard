<template>
  <q-page padding class="column text-white q-pa-none">
    <!-- content -->
    <!--    <meter-bar rounded color="temperature-gradient" v-model="progress" width="3rem"/>-->
    <div class="col flex flex-center">
      <q-icon name="001-sun" class="text-h1"/>
    </div>
    <div class="col row text-h6" style="min-height: 200px">
      <div class="col column content-center items-center">
        <meter-bar class="col-10" v-model="temp" rounded width="2rem" color="temperature-gradient"/>
        <div class="col q-pa-sm">33°C</div>
      </div>
      <div class="col column content-center items-center">
        <meter-bar class="col-10" v-model="humidity" rounded width="2rem" color="humidity-gradient"/>
        <div class="col q-pa-sm">{{humidity*100}}%</div>
      </div>
    </div>
    <div class="col row text-h3 splitSession" style="margin-top: 2rem">
      <q-btn flat class="col text-h5 verticalSplit"
             v-for="elem in twoBar" :key="elem.text">
        <q-icon :name="elem.icon"/>
        <div class="q-ma-md"/>
        <div class="text-secondary text-body1 text-no-wrap">{{elem.text}}</div>
      </q-btn>
    </div>
    <div class="col row" style="border: solid rgba(255, 255, 255, 0.1) 1px">
      <q-btn  flat class="col text-h6 flex flex-center verticalSplit" v-for="elem in fourthBar" :key="elem.text">
        <div class="column items-center q-gutter-md">
          <q-icon :name="elem.icon"/>
          <div class="text-secondary text-body2 text-no-wrap">{{elem.text}}</div>
        </div>
      </q-btn>
    </div>
  </q-page>
</template>

<script lang="ts">
  import MeterBar from 'components/MeterBar.vue';
  import { defineComponent } from '@vue/composition-api';
  import { colors } from 'quasar';

  export default defineComponent({
    // name: 'PageName'
    components: {
      MeterBar
    },
    data() {
      return {
        temp: 0.5,
        humidity: 0.8,
        colors,
        twoBar: [
          { text: 'ESTE', icon: 'vane' },
          { text: '5 m/s', icon: '032-windsock' }
        ],
        fourthBar: [
          { text: '1002hpa', icon: 'barometer' },
          { text: '1.8 W', icon: 'wind_turbine' },
          { text: '70mm', icon: '028-drop' },
          { text: '254 lum', icon: '022-sunrise' }
        ]
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

</style>
