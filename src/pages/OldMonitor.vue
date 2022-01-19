<template>
  <q-page padding class="row q-pa-none">
    <!-- content -->
    <!--      <div class=" content-between">-->
    <div class="col-12 col-lg column">
      <q-tabs indicator-color="transparent" active-color="primary" class="col-12 column">
        <div class="column self-stretch col-12">
          <div class="col-2 row flex flex-center justify-evenly">
            <DashboardComponent :img="elem.img" :to="elem.graph" :label="elem.label" v-for="elem in uiTop" state="0.0 %"
                                :key="elem.label"/>
          </div>
          <div class="col column q-pa-md">
            <router-view class="col-12"/>
          </div>
          <div class="col-2 row flex flex-center justify-evenly">
            <DashboardComponent :img="elem.img" :to="elem.graph" :label="elem.label" v-for="elem in uiBottom"
                                state="0.0 %" :key="elem.label"/>
          </div>
        </div>
      </q-tabs>
    </div>
  </q-page>
</template>

<script lang="ts">
import DashboardComponent from 'components/old/DashboardComponent.vue'
import { defineComponent } from '@vue/composition-api'

const humidity = require('assets/img/humidity_50px.png')
const temperatura = require('assets/img/dht_32px.png')
const pluviometro = require('assets/img/rain_gauge_filled_50px.png')
const luminosidad = require('assets/img/summer_50px.png')
const viento = require('assets/img/wind_50px.png')
const direccion = require('assets/img/wind_direction_50px.png')
const presion = require('assets/img/pressure_gauge_50px.png')
const suelo = require('assets/img/atmospheric_32px.png')


export default defineComponent({
  // name: 'PageName',
  components: {
    DashboardComponent
  },
  data() {
    return {
      uiTop: [
        { img: humidity, label: 'humedad', graph: 'humidity' },
        { img: temperatura, label: 'temperatura', graph: 'humidity' },
        { img: pluviometro, label: 'pluviometro', graph: 'humidity' },
        { img: luminosidad, label: 'luminosidad', graph: 'humidity' }
      ],
      uiBottom: [
        { img: viento, label: 'viento', graph: 'humidity' },
        { img: direccion, label: 'direccion', graph: 'humidity' },
        { img: presion, label: 'presion', graph: 'humidity' },
        { img: suelo, label: 'suelo', graph: 'humidity' }
      ]
    }
  }
})
</script>
