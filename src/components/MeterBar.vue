<template>
  <div class="row text-h6" style="position: relative">
    <q-icon ref="indicator" name="arrow-left" :style="indicator">
    </q-icon>
    <div ref="meter" :style="meterClass">
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
        default: 'solid rgba(255, 255, 255, 0.1)'
      },
      width: {
        type: String,
        default: '1rem'
      }
    },
    computed: {
      meterClass(): any {
        return {
          position: 'relative',
          padding: '1px',
          background: colors.getBrand(this.color) ? colors.getBrand(this.color) : this.color,
          // background: 'black',
          border: this.isMounted ? this.border : '',
          'border-radius': this.rounded ? '1000rem' : '',
          'overflow': 'hidden',
          width: this.width,
          'border-spacing': 'revert',
          // '-webkit-background-clip': 'padding-box',
          // '-moz-background-clip': 'padding',
          'background-clip': 'content-box'
        };
      },
      coverClass(): any {
        let height = this.value <= 1 ? 1 - this.value : 0;
        let color = colors.getBrand(this.trackColor) ? colors.getBrand(this.trackColor) : this.trackColor;
        return {
          position: 'absolute',
          width: '100px',
          top: '0',
          height: `${height * this.barHeight}px`,
          background: color,
          transform: 'translateY(-5px)'
        };
      },
      barHeight() {
        if (!this.isMounted) return 0;
        let meter = this.$refs.meter as Element;
        return height(meter);
      },
      indicator(): any {
        if (!this.isMounted) return {};
        let barHeight = this.value <= 1 ? 1 - this.value : 0;
        return {
          position: 'absolute',
          top: `calc(${barHeight * this.barHeight - 1}px - 0.5em)`,
          left: this.width
        };
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
    /*border-style: ;*/
  }

  .indicator {
    position: absolute;
    top: 0;
    left: 2rem;
  }
</style>
