<template>
  <q-page padding class="column">
    <!-- content -->
    <VueApexCharts :series="series" :options="options" height="100%"/>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts';
  import {colors} from 'quasar';
  const palette = colors.getPaletteColor

  export default defineComponent({
    // name: 'PageName',
    components: {
      VueApexCharts
    },
    data() {
      return {
        series: [
          {
            name: 'Series 1',
            data: [45, 52, 38, 45, 19, 23, 2]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            colors: [palette('accent')]
          },
          fill: {
            colors: [palette('accent')],
            type: 'gradient',
            gradient: {
              shade: 'dark',
              shadeIntensity: 1,
              opacityFrom: 0.8,
              opacityTo: 0.1,
              stops: [0, 90, 100]
            }
          },
          xaxis: {
            categories: [
              '01 Jan',
              '02 Jan',
              '03 Jan',
              '04 Jan',
              '05 Jan',
              '06 Jan',
              '07 Jan'
            ]
          }
        }
      };
    }
  });
</script>
