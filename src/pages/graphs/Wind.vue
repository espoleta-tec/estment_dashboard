<template>
  <div class="row">
    <!-- content -->
    {{ series }}
    <GraphView :series="series" :radar="true" class="col-12"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  // name: 'PageName'
  components: {},
  computed: {
    series() {
      const array = new Array(4)
      for (let i = 0; i < array.length; i++) {
        array[i] = 0
      }
      this.$store.getters['api/gData']('wind_direction_average').forEach(elem => {
        if (elem.y > 0) {
          array[elem.y - 1]++
        }
      })

      return array
    }
  }
})
</script>
