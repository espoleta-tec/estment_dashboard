<template>
  <q-page class="row text-white">
    <!-- content -->
    <!--    <meter-bar rounded color="temperature-gradient" v-model="progress" width="3rem"/>-->
    <div class="col-12 column">
      <router-view class="col"/>
      <q-space/>
      <div class="col-auto row">
        <div :key="elem.text" class="col-4 col-sm-3 col-lg-2 col-xl-1 row q-pa-sm" v-for="elem in fourthBar">
          <q-btn :to="elem.to" :class="`col-12 row q-pa-sm ${ $route.path === elem.to ? 'bg-secondary' : 'text-white'}`" outline v-ripple:secondary>
            <div class="col-12 flex flex-center">
             <!-- <div class="text-no-wrap text-secondary" style="font-size: 8pt">{{elem.text}}</div><q-space/>
             <div style="flex-basis: 100%; height: 1px"/> -->
              <q-icon :name="elem.icon"/>
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
  import MeterBar from 'components/MeterBar.vue';
  import { defineComponent } from '@vue/composition-api';
  import { colors } from 'quasar';
  import Helix from 'components/Helix.vue';

  export default defineComponent({
    name: 'PageName',
    components: {
      MeterBar, Helix
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
          { text: '1.8 W', icon: 'wind_turbine', to: '/power' },
          { text: '', icon: 'home_filled', to: '/' },
          { text: '70mm', icon: '028-drop', to: '/precipitation' },
          { text: '254 lum', icon: 'temperature', to: '/humidity' },
          { text: 'lol', icon: '022-sunrise' },
          { text: 'fefe', icon: '022-sunrise' }
        ],
        selected: 1,

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
