<template>
  <div class="relative-position text-white">

    <div class="q-pa-md flex content-stretch self-stretch" style="height: 100%" v-if="$store.state.api.logs.length > 0">
      <div class="row col" style="min-height: 20em">
        <RadarView class="col-12" v-if="radar"/>
        <AreaView :series="series" class="col-12" v-else>
          <template v-slot:left>
            <slot name="left"></slot>
          </template>
          <template v-slot:right>
            <slot name="right"></slot>
          </template>
        </AreaView>
      </div>
    </div>
<!--    <div v-else>{{$store.getters['api/graphData']}}</div>-->
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api'
  import AreaView from 'components/AreaView.vue'
  import RadarView from 'components/RadarView.vue'


  export default defineComponent({
    name: 'GraphView',
    components: { RadarView, AreaView },
    props: {
      series: Array,
      radar: {
        type: Boolean,
        default: false
      },
      secondData: {
        type: Object,
        default: null
      },
      bar: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    }
  })
</script>
