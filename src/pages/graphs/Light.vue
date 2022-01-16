<template>
  <div class="row no-wrap text-white">
    <!-- content -->
    <GraphView :series="series" class="col-12">
      <!--      <template v-slot:left>-->
      <!--        <div class="q-pa-md">-->
      <!--&lt;!&ndash;          <div>Temp {{ $store.getters['api/temperature'] }}</div>&ndash;&gt;-->
      <!--&lt;!&ndash;          <div>Hum {{ series[1].data[0].y }}%</div>&ndash;&gt;-->
      <!--        </div>-->
      <!--      </template>-->
      <!--      <template v-slot:right>-->
      <!--        <table class="text-left text-body2">-->
      <!--          <tr>-->
      <!--            <td></td>-->
      <!--            <td class="text-positive">Max</td>-->
      <!--            <td></td>-->
      <!--            <td class="text-warning">Min</td>-->
      <!--          </tr>-->
      <!--          <tr class="text-green-12">-->
      <!--            <td>Temp</td>-->
      <!--            <td>{{ maxTemp }}</td>-->
      <!--            <td>|</td>-->
      <!--            <td>{{ minTemp }}</td>-->
      <!--          </tr>-->
      <!--          <tr class="text-accent">-->
      <!--            <td>Hum</td>-->
      <!--            <td>{{ maxHum }}</td>-->
      <!--            <td>|</td>-->
      <!--            <td>{{ minHum }}</td>-->
      <!--          </tr>-->
      <!--        </table>-->
      <!--      </template>-->
    </GraphView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // name: 'PageName'

  computed: {
    series(): any {
      return [
        {
          name: 'Temperatura',
          data: this.$store.getters['api/gData']('light')
        }
      ]
    },
    minTemp(): number {
      return Math.min(...this.series[0].data.map((d: any) => d.y))
    },
    maxTemp(): number {
      return Math.max(...this.series[0].data.map((d: any) => d.y))
    },
    minHum(): number {
      return Math.min(...this.series[1].data.map((d: any) => d.y))
    },
    maxHum(): number {
      return Math.max(...this.series[1].data.map((d: any) => d.y))
    }
  }
})
</script>
