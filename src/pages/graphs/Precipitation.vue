<template>
  <div class="row">
    <!-- content -->
    <GraphView :series="series" :bar="true" class="col-12"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapData } from 'src/utils/helpers'

export default defineComponent({
  // name: 'PageName'
  computed: {
    series(): any {
      return [
        {
          name: 'Precipitaciones',
          data: this.$store.getters['api/gData']('water_count')
        }]
    }
  },
  setup() {
    return {
      mapData
    }
  }
})
</script>
