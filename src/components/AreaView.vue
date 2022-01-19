<template>
  <div class="row relative-position">
    <div class="absolute text-body1 row" style="z-index: 2;top: 2rem; left: 3rem;">
      <slot name="left"></slot>
    </div>
    <div class="absolute text-right row" style="right: 1rem; top: 2rem; z-index: 2">
      <slot name="right"></slot>
    </div>
    <VueApexCharts :options="options" :series="series" class="col-12" height="100%"
                   style="z-index: 1; margin-top: 0"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { colors } from 'quasar'
import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts'


let hundred: any = []
for (let i = 0; i < 20; i++) {
  hundred.push(Math.floor(Math.random() * 800))
}

const palette = colors.getPaletteColor
export default defineComponent({
  // name: 'ComponentName'
  components: {
    VueApexCharts
  },
  props: {
    series: {
      type: Array as PropType<{ name: string, data: any }[]>,
      required: true,
      default: () => ([{ name: '', data: null }])
    }
  },
  computed: {
    options(): any {
      return {
        legend: {
          labels: {
            colors: [palette('white')]
          },
          markers: {
            fillColors: [palette('green-12'), palette('accent')]
          }
        },
        chart: {
          // stacked: true,
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
          colors: [palette('green-12'), palette('accent')]
        },
        fill: {
          colors: [palette('green-12'), palette('accent')],
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
          }
        },
        xaxis: {
          type: 'datetime',
          labels: {
            style: {
              colors: '#FFF'
            }
          }
        },
        yaxis: [{
          min: 0,
          max: 2 * Math.max(...this.series[0].data.map((d: any) => d.y)),
          opposite: false,
          tickAmount: 5,
          labels: {
            style: {
              colors: [palette('accent')]
            },
            formatter: function(value: number): string | number {
              if (value === 0) return ''
              return Math.ceil(value)
            }
          }
        }]
      }
    }
  }
})
</script>
