<template>
  <div class="row">
    <!-- content -->
    <GraphView :series="series" :radar="true" class="col-12" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // name: 'PageName'
  components: {},
  computed: {
    series() {
      const array = new Array(16)
      for (let i = 0; i < array.length; i++) {
        array[i] = 0
      }
      this.$store.getters['api/gData']('wind_direction_sec').forEach(
        (elem: any) => {
          if (elem.y > 0) {
            let i = Math.floor((elem.y * 16) / 360)
            array[i]++
          }
        }
      )

      return array
    }
  }
})
</script>
