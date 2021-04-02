<template>
  <div class="flex flex-center">
    <div class="flex flex-center q-pa-md text-h4" style="position:relative; ">
      <VueSvgGauge :base-color="baseColor" :gauge-color="gaugeColor" :max="1" :min="0"
                   :scale-interval="0" :separator-step="0.25" :separator-thickness="4"
                   v-model="value">
        <q-icon name="035-humidity" style="position: absolute; bottom: 0.5rem; left: calc(50% - 0.5em)"/>
      </VueSvgGauge>
      <div class="text-body2 text-secondary" style="position:absolute; bottom: 0; right: 2vw;">{{value*100}}%</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { colors } from 'quasar';
  import { VueSvgGauge } from 'vue-svg-gauge';

  export default defineComponent({
    // name: 'ComponentName'
    components: { VueSvgGauge },
    computed: {
      gaugeColor() {
        return [
          { offset: 0, color: colors.getPaletteColor('white') }
        ];
      },
      baseColor() {
        return colors.getPaletteColor('dark');
      }
    },
    props: {
      value: {
        type: Number,
        required: true
      }
    }
  });
</script>
