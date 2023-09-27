<template>
  <div class="row">
    <VueApexCharts
      :options="options"
      :series="series"
      class="col-12"
      type="radar"
    />
    <div class="text-h6 col-grow text-center">
      <q-icon name="032-windsock" />
      <span style="margin-left: .5em"
        >{{ $store.state.api.wind_speed_average }} m/s</span
      >
    </div>
    <div class="text-h6 col-grow text-center">
      <q-icon name="vane" />
      <span style="margin-left: .5em">{{
        $store.getters['api/lastWindDirection']
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts'
import { colors } from 'quasar'

const palette = colors.getPaletteColor

export default defineComponent({
  // name: 'ComponentName'
  props: {
    data: Array
  },
  data() {
    return {
      series: [
        {
          name: 'Radar Series 1',
          data: this.data
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
            offsetX: 0,
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
        labels: ['N', 'NE', 'E', 'SE', 'S', 'SO', 'O', 'NO']
          .map(l => [l, ' '])
          .flat(),
        // labels: ['N', 'E', 'S', 'O'],
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          max: 2 * Math.max(...this.data),
          tickAmount: 4,
          labels: {
            show: true,
            style: {
              colors: '#FFF',
              fontSize: '8pt'
            }
          }
        }
      }
    }
  },
  components: {
    VueApexCharts
  }
})
</script>
