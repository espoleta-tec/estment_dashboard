<template>
  <q-page class="row">
    <!-- content -->
    <div class="col-12 col-lg q-pa-md">
      <sh1>Sensores</sh1>
      <div class="row">
        <q-table class="q-table text-uppercase" :data="sensors" flat :columns="columns" :pagination="{rowsPerPage: 0}"
                 hide-pagination
                 style="height: 500px">
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="state" :props="props">
                <span :class="'dot bg-' + selectColor(props.row.state)"></span>
              </q-td>
              <q-td key="img" :props="props">
                <q-img ratio="1" height="25px" :src="props.row.img" contain/>
              </q-td>
              <q-td key="desc" :props="props">
                {{props.row.desc}}
              </q-td>
              <q-td key="sensors" :props="props">
                {{props.row.sensor}}
                <q-popup-edit v-model="props.row.sensor" label-cancel="cancelar" label-set="ok" auto-save>
                  <q-select v-model="props.row.sensor" :options="sensorList[props.row.id]" autofocus
                            v-on:focusout="props.row.sensor = '4'"/>
                </q-popup-edit>
              </q-td>
              <q-td key="toggled" :props="props">
                <q-toggle v-model="props.row.toggled"/>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <div class="flex flex-center">
        <q-btn label="guardar" unelevated color="primary"/>
      </div>
    </div>
    <div class="col-12 col-lg-4 bg-accent">
      <SensorsLegend/>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { sensorList } from './models';
  import SensorsLegend from './docs/SensorsLegend.vue';

  export default {
    // name: 'PageName',
    components: {
      SensorsLegend
    },
    data() {
      return {
        sensorList,
        sensors: [
          {
            id: 'temp',
            state: 'ok',
            img: 'img/dht_32px.png',
            desc: 'Temperatura, Humedad',
            sensor: 'Seleccionar',
            toggled: true
          },
          {
            id: 'pres',
            state: 'ok',
            img: 'img/atmospheric_32px.png',
            desc: 'Presión atmosférica',
            sensor: 'Seleccionar',
            toggled: true
          },
          {
            id: 'rain',
            state: 'danger',
            img: 'img/rain_gauge_filled_50px.png',
            desc: 'Pluviómetro',
            sensor: 'Seleccionar',
            toggled: true
          },
          {
            id: 'winds',
            state: 'ok',
            img: 'img/wind_gauge_32px.png',
            desc: 'Velocidad del viento',
            sensor: 'Seleccionar',
            toggled: true
          },
          {
            id: 'windv',
            state: 'neutral',
            img: 'img/wind_rose_32px.png',
            desc: 'Dirección del viento',
            sensor: 'Seleccionar',
            toggled: true
          },
          {
            id: 'lumin',
            state: 'neutral',
            img: 'img/sun_32px.png',
            desc: 'Luminosidad',
            sensor: 'Seleccionar',
            toggled: true
          }
        ],
        columns: [
          {
            label: 'estado',
            name: 'state',
            field: (row: any) => row.state,
            style: 'text-align: center;'
          },
          {
            label: 'Variable',
            name: 'img',
            field: (row: any) => row.img
          },
          {
            label: 'Descripcion',
            name: 'desc',
            style: 'width: 10rem; text-align: left',
            field: (row: any) => row.desc

          },
          {
            label: 'Sensores',
            name: 'sensors',
            style: 'width: 10rem; text-align: center',
            field: (row: any) => row.desc
          },
          {
            label: 'Activacion',
            name: 'toggled',
            field: (row: any) => row.desc,
            style: 'text-align: center;'
          }
        ]
      };
    },
    methods: {
      selectColor(state: string) {
        if (state == 'ok') {
          return 'positive';
        } else if (state == 'danger') {
          return 'negative';
        } else return 'grey';
      }
    },
    mounted(): void {
      console.log(sensorList);
    }
  };
</script>
<style scoped lang="scss">
  .dot {
    $side: 15px;
    height: $side;
    width: $side;
    border-radius: 50%;
    display: inline-block;
  }
</style>
<style lang="scss">
  tr td {
    border: none !important;
  }


  .q-table th {
    text-align: center;
  }
</style>
