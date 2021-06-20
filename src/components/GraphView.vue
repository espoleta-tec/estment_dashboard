<template>
  <div class="relative-position text-white">

    <div class="q-pa-md self-stretch" style="height: 100%">
      <div class="row" style="min-height: 20em">
        <RadarView class="col-12" v-if="radar"/>
        <AreaView :second-data="secondData" class="col-12" v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import AreaView from 'components/AreaView.vue';
  import RadarView from 'components/RadarView.vue';


  export default defineComponent({
    name: 'GraphView',
    components: { RadarView, AreaView },
    props: {
      radar: {
        type: Boolean,
        default: false
      },
      secondData: {
        type: Object,
        default: null
      },
      bar: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {

        series2: [
          {
            name: 'Series 2',
            data: [
              { x: '01/01/2021', y: 54 }, { x: '02/05/2021', y: 600 },
              { x: '03/07/2021', y: 20 }, { x: '04/30/2021', y: 500 },
              { x: '05/07/2021', y: 20 }, { x: '06/30/2021', y: 50 },
              { x: '07/07/2021', y: 89 }, { x: '08/30/2021', y: 500 },
              { x: '09/07/2021', y: 20 }, { x: '10/30/2021', y: 700 },
              { x: '11/07/2021', y: 150 }, { x: '12/30/2021', y: 300 }
            ]
          }],
        options2: {
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 100
              // columnWidth: '100%'
            }
          },
          chart: {
            type: 'area',
            height: 100,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          stroke: {
            curve: 'straight',
            width: 1
          },
          dataLabels: {
            enabled: false
          },
          grid: {
            show: true,
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
            type: this.bar ? 'category' : 'datetime',
            // type: 'category',
            // max: new Date().getTime(),
            // min: new Date().setMonth(new Date().getMonth() - 12),
            min: new Date(new Date().getFullYear(), 0, 1).getTime(),
            max: new Date(new Date().getFullYear(), 11, 31).getTime(),
            tickAmount: 3,
            axisBorder: {
              show: true
            },
            endOnTick: true,
            axisTicks: {
              show: false
            },
            labels: {
              show: true,
              style: {
                colors: '#FFF'
              },
              format: 'MMM',
              formatter: this.bar ? function(val: string) {
                return Intl.DateTimeFormat('en', { month: 'short' }).format(new Date(val));
                // return new Date(val).getMonth() + 1
              } : undefined
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
