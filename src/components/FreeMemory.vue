<template>
  <div class="relative-position">
    <q-icon :style="`font-size: ${fontSize};`" name="sd_filled"/>
    <div :style="`height: ${value}%; width: 100%`" class="absolute-bottom-left overflow-hidden">
      <q-icon :style="`font-size: ${fontSize};`" class="absolute-bottom-left text-secondary" name="sd_filled"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    // name: 'ComponentName'
    data() {
      return {
        fontSize: `${40}vw`
      };
    },
    props: {
      value: {
        type: Number,
        required: true
      }
    }
  });
</script>
