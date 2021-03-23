<template>
  <div class="self-stretch row">
    <div ref="meter" class="col" :style="meterClass">
      <div :style="coverClass"/>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { colors, dom } from 'quasar';

  const { height } = dom;

  export default defineComponent({
    // name: 'ComponentName'
    data() {
      return {
        isMounted: false
      };
    },
    mounted() {
      this.isMounted = true;
    },
    props: {
      color: {
        type: String,
        default: colors.getBrand('secondary')
      },
      rounded: {
        type: Boolean,
        default: false
      },
      trackColor: {
        type: String,
        default: colors.getBrand('dark')
      },
      value: {
        type: Number,
        required: true
      },
      border: {
        type: String,
        default: 'solid white 1px'
      },
      width: {
        type: String,
        default: '1rem'
      }
    },
    computed: {
      meterClass(): any {
        return {
          background: colors.getBrand(this.color) ? colors.getBrand(this.color) : this.color,
          'border-radius': this.rounded ? '9999px' : '',
          border: this.isMounted ? this.border : '',
          'overflow': 'hidden',
          width: this.width
        };
      },
      coverClass(): any {
        let height = this.value <= 1 ? 1 - this.value : 0;
        let color = colors.getBrand(this.trackColor) ? colors.getBrand(this.trackColor) : this.trackColor
        return {
          width: '100%',
          height: `${height * this.barHeight}px`,
          background: color
        };
      },
      barHeight() {
        if (!this.isMounted) return 0;
        let meter = this.$refs.meter as Element;
        return height(meter)
      }
    }
  });
</script>
<style lang="scss">
  .meter {
    background: $temperature-gradient;
    border-radius: 9999px;
    border: solid white 1px;
    overflow: hidden;
  }
</style>
