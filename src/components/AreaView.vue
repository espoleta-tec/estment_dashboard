<template>
  <div class="row relative-position">
    <!--    <div class="absolute bg-primary" style="height: 50%; width: 100%; top: 0; left: 0; z-index: 2"></div>-->
    <div
      class="absolute text-body1 row"
      style="z-index: 2;top: 2rem; left: 3rem;"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="absolute text-right row"
      style="right: 1rem; top: 2rem; z-index: 2"
    >
      <slot name="right"></slot>
    </div>
    <VueApexCharts
      :options="options"
      :series="series"
      class="col-12"
      height="100%"
      style="z-index: 1; margin-top: 0"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { colors } from 'quasar'
import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts'
import { ApexOptions } from 'apexcharts'

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
      type: Array as PropType<{ name: string; data: any }[]>,
      required: true,
      default: () => [{ name: '', data: null }]
    }
  },
  computed: {
    options(): any {
      const options: ApexOptions = {
        legend: {
          labels: {
            colors: [palette('white')]
          },
          markers: {
            fillColors: [palette('green-12'), palette('accent')]
          }
        },
        tooltip: {
          enabled: false
          // fillSeriesColor: true,
          // marker: {
          //   // fillColors: [palette('green-12'), palette('accent')]
          // }
        },
        annotations: {
          points: [
            {
              marker: {
                fillColor: palette('white')
              }
            }
          ]
        },
        chart: {
          // stacked: true,
          // height: 350,
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
          curve: 'smooth',
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
            datetimeUTC: false,
            style: {
              colors: '#FFF'
            }
          }
        },
        yaxis: [
          {
            min: 0,
            max:
              2 *
              Math.max(
                ...this.series[0].data.map((d: any) => d.y),
                ...(this.series[1]
                  ? this.series[1].data.map((d: any) => d.y)
                  : [])
              ),
            opposite: false,
            tickAmount: 5,
            labels: {
              style: {
                colors: palette('green-12')
              },
              formatter: function(value: number): string {
                if (value === 0) return ''
                return (Math.ceil(value) as unknown) as string
              }
            }
          }
        ],
        markers: {
          colors: [palette('green-12'), palette('accent')]
        }
      }
      if (this.series.length > 1) {
        const secondYAxis = {
          min: 0,
          max: 3 * Math.max(...this.series[1].data.map((d: any) => d.y)),
          opposite: true,
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
        }
        // if (Array.isArray(options.yaxis)) {
        //   options.yaxis?.push(secondYAxis as any)
        // }
      }
      return options
    }
  }
})
</script>
<style lang="scss"></style>
