<template>
  <div class="row relative-position">
    <div class="absolute text-h5 row" style="z-index: 2;top: 2rem; left: 3rem;">
      <div class="text-bold">1002</div>
      <pre> </pre>
      hpa
    </div>
    <div class="absolute text-right row" style="right: 1rem; top: 2rem; z-index: 2">
      <table class="text-left text-body2">
        <tr>
          <td>Max 31.3</td>
          <td>|</td>
          <td>12-2-21</td>
        </tr>
        <tr>
          <td>Min 25</td>
          <td>|</td>
          <td>1-3-20</td>
        </tr>
      </table>
    </div>
    <VueApexCharts :options="options" :series="series" class="col-12" height="100%" style="z-index: 1; margin-top: 0"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from '@vue/composition-api';
  import { colors } from 'quasar';
  import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts';
  import { DataSet } from 'components/models';

  let day: any = [];
  for (let i = 0; i < 24; i += 2) {
    day.push(i);
  }

  let hundred: any = [];
  for (let i = 0; i < 20; i++) {
    hundred.push(Math.floor(Math.random() * 800));
  }

  const palette = colors.getPaletteColor;
  export default defineComponent({
    // name: 'ComponentName'
    components: {
      VueApexCharts
    },
    props: {
      secondData: {
        type: (Object as unknown) as PropType<DataSet>,
        required: false
      }
    },
    computed: {
      series(): any {
        let series = [{
          name: 'Temperatura',
          data: [450, 300, 120, 25, 222, 45, 180]
        }];
        if (this.secondData) {
          series.push({
            name: 'Humedad',
            data: [20, 5, 30, 35, 50, 55, 80]
          });
        }
        return series;
      },
      options(): any {
        let options = {
          legend: {
            labels: {
              colors: [palette('white')]
            }
          },
          chart: {
            stacked: true,
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
            width: 1,
            colors: [palette('accent'), palette('green')]
          },
          fill: {
            colors: [palette('accent'), palette('green')],
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
            borderColor: 'white',
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: false
              }
            },
            row: {
              colors: [palette('dark')],
              opacity: 1
            }
            // column: {
            //   colors: ['transparent', palette('dark')],
            //   opacity: 1
            // },
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
          yaxis: [{
            min: 0,
            max: 900,
            opposite: false,
            tickAmount: 9,
            labels: {
              style: {
                colors: [palette('accent')]
              },
              formatter: function(value: number): string | number {
                if (value === 0) return '';
                return value;
              }
            }
          }]
        };
        if (this.secondData) {
          options.yaxis.push({
            min: 0,
            max: 200,
            opposite: true,
            tickAmount: 10,
            labels: {
              style: {
                colors: [palette('green')]
              },
              formatter: function(value: number) {
                if (value > 100) return '';
                return `${value}${(value > 0 ? '%' : '')}`;
              }
            }
          });
        }
        return options;
      }
    }
  });
</script>
