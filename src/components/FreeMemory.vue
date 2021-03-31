<template>
  <div class="relative-position">
    <q-icon name="sd_filled" style="font-size: 40vw;"/>
    <div :style="`height: ${value}%; width: 100%`" class="absolute-bottom-left overflow-hidden">
      <q-icon name="sd_filled" style="font-size: 40vw;" class="absolute-bottom-left text-secondary"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  // name: 'ComponentName'
  props: {
    value: {
      type: Number,
      required: true
    }
  }
})
</script>
