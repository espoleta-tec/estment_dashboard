<template>
  <div class="row relative-position">
    <div class="absolute-top-left text-h6 q-ma-lg" style="right: 1rem; bottom: 0">
      <q-icon name="032-windsock"/>
      <span>3 M/S</span>
    </div>
    <VueApexCharts :options="options" :series="series" class="col-12" height="100%" type="radar"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts';
  import { colors } from 'quasar';

  const palette = colors.getPaletteColor;

  export default defineComponent({
    // name: 'ComponentName'
    data() {
      return {
        series: [
          {
            name: 'Radar Series 1',
            data: [45, 52, 38, 24, 40, 10, 4, 50]
          }
        ],
        options: {
          chart: {
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radar: {
              size: undefined,
              offsetX: 50,
              offsetY: 0,
              polygons: {
                strokeColors: 'rgba(255, 255, 255, 0.2)',
                strokeWidth: 1,
                connectorColors: 'rgba(255, 255, 255, 0.2)',
                fill: {
                  colors: undefined
                }
              }
            }
          },
          tooltip: {
            enabled: true
          },
          markers: {
            colors: [palette('white')],
            size: 0
          },
          stroke: {
            width: 2,
            colors: [palette('green')]
          },
          fill: {
            opacity: 0.2,
            colors: [palette('green')]
          },
          labels: ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO'],
          xaxis: {
            labels: {
              show: true,
              style: {
                colors: [
                  '#FFF',
                  '#888',
                  '#FFF',
                  '#888',
                  '#FFF',
                  '#888',
                  '#FFF',
                  '#888'
                ],
                fontSize: '12pt'
              }
            }
          },
          yaxis: {
            min: 0,
            max: 60,
            tickAmount: 3,
            labels: {
              show: true,
              style: {
                colors: '#FFF',
                fontSize: '8pt'
              }
            }
          }
        }
      };
    },
    components: {
      VueApexCharts
    }
  });
</script>
