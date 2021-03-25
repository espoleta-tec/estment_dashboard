<template>
  <div class="column relative-position text-white">
    <q-icon class="text-h1" name="wind_turbine"
            style="position: absolute; z-index: 0; right: 1rem; top: 0; opacity: 0.1"/>
    <div class="col-1 column column no-wrap text-no-wrap text-uppercase" style="margin-left: 2em">
      <div class="col text-body2">promedio dia</div>
      <div class="col text-secondary text-h6 text-weight-bolder">1.2 Watts</div>
    </div>
    <div class="col row">
      <div class="col-12" style="min-height: 200px">
        <VueApexCharts :options="options" :series="series" class="" height="100%" style="z-index: 1"/>
      </div>
    </div>
    <div class="col-2 row items-end q-pa-md text-uppercase" style="margin-left: 2em">
      <div class="col flex items-end">historico 100 dias</div>
      <div class="col text-right">
        <span>max 32.3 | 12-2-21</span><br/>
        <span class="text-accent">MIN 16.0 | 18-3-21</span>
      </div>
    </div>
    <div class="col-2" style="padding-right:1em">
      <div style="max-height: 100px;">
        <div class="absolute-top-left row q-pa-md"
             style="height: 100%; width: 100%; padding-left: 3em; padding-right: 0">
          <div :key="n" class="col-3 relative-position" style="border: solid rgba(255, 255, 255, 0.2) 1px"
               v-for="n in months">
            <div class="absolute text-white" style="opacity: 1;bottom: -1.5em; left: calc(50% - 1em)">{{n}}</div>
          </div>
        </div>
        <VueApexCharts :options="options2" :series="series2" height="100%"
                       type="line"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { colors } from 'quasar';
  import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts';


  const palette = colors.getPaletteColor;

  let day: any = [];
  for (let i = 0; i < 24; i += 2) {
    day.push(i);
  }

  let hundred: any = [];
  for (let i = 0; i < 20; i++) {
    hundred.push(Math.floor(Math.random() * 800));
  }

  export default defineComponent({
    name: 'GraphView',
    components: { VueApexCharts },

    data() {
      return {
        months: ['NOV', 'DIC', 'ENE', 'FEB'],
        series: [
          {
            name: 'Series 1',
            data: [450, 300, 120, 25, 222, 45, 180]
          }
        ],
        options: {
          chart: {
            height: 350,
            type: 'area',
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
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
              shadeIntensity: 0.5,
              opacityFrom: 0.8,
              opacityTo: 0.2,
              stops: [0, 90, 100]
            }
          },
          grid: {
            borderColor: palette('grey-8'),
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            }
          },
          xaxis: {
            categories: day,
            labels: {
              style: {
                colors: '#FFF'
              },
              formatter: function(value: number) {
                if (value === 0) return '';
                return value;
              }
            },
            max: 13
          },
          yaxis: {
            min: 0,
            max: 900,
            tickAmount: 9,
            labels: {
              style: {
                colors: ['#FFF']
              },
              formatter: function(value: number) {
                if (value === 0) return '';
                return value;
              }
            }
          }
        },
        series2: [{
          name: 'Series 2',
          data: hundred
        }],
        options2: {
          chart: {
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          grid: {
            show: false,
            xaxis: {
              lines: {
                show: true
              }
            }
          },
          xaxis: {

            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              show: false,
              style: {
                colors: '#FFF'
              }
            }
          },
          yaxis: {
            min: 0,
            max: 800,
            tickAmount: 1,
            labels: {
              style: {
                colors: ['#FFF']
              }
            }
          }
        }
      };
    }
  });
</script>
