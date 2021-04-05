<template>
  <div class="row relative-position text-white">
    <!--    <div class="absolute column column no-wrap text-no-wrap text-uppercase q-ma-lg"-->
    <!--         style="z-index: 1; margin-left: 3rem">-->
    <!--      &lt;!&ndash;      <div class="col text-body2">promedio dia</div>&ndash;&gt;-->
    <!--      <div class="col text-secondary text-h6 text-weight-bolder">1.2 Watts</div>-->
    <!--    </div>-->
    <div class="col-12 row">
      <div class="col-12 row" style="min-height: 200px">
        <RadarView class="col-12" v-if="radar"/>
        <AreaView :second-data="secondData" class="col-12" v-else/>
      </div>
    </div>
    <div class="col-12" style="min-height: 50px; max-height: 100px">
      <VueApexCharts :options="options2" :series="series2" :type="bar ? 'bar' : 'area'" height="100%"/>
    </div>
    <div class="col-1"/>
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
              { x: '03/07/2021', y: 20 }, { x: '04/31/2021', y: 500 },
              { x: '05/07/2021', y: 20 }, { x: '06/31/2021', y: 50 },
              { x: '07/07/2021', y: 89 }, { x: '08/31/2021', y: 500 },
              { x: '09/07/2021', y: 20 }, { x: '10/31/2021', y: 700 },
              { x: '11/07/2021', y: 150 }, { x: '12/31/2021', y: 300 }
            ]
          }],
        options2: {
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 100,
              columnWidth: '100%'
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
            type: 'datetime',
            // max: new Date().getTime(),
            // min: new Date().setMonth(new Date().getMonth() - 12),
            min: new Date(new Date().getFullYear(), 0, 1).getTime(),
            max: new Date(new Date().getFullYear(), 11, 31).getTime(),
            // tickAmount: 3,
            axisBorder: {
              show: true
            },
            axisTicks: {
              show: true
            },
            labels: {
              show: true,
              style: {
                colors: '#FFF'
              },
              format: 'MMM'
              // formatter: function(val: string, timestamp: string) {
              //   return  Intl.DateTimeFormat('es', {month: 'short'}).format(new Date(timestamp))
              // }
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
