<template>
  <div class="row">
    <!-- content -->
    <GraphView :series="series" class="col-12"/>
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
          name: 'Presión',
          data: mapData(this.$store.getters['api/graphData'], 'pressure')
        }]
    }
  }
})
</script>
