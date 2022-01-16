<template>
  <div class="row">
    <!-- content -->
    <GraphView :series="series" class="col-12"/>
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
          name: 'Presión',
          data: this.$store.getters['api/gData']('pressure')
        }]
    }
  }
})
</script>
