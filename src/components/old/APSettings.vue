<template>
  <div class="q-form q-ma-md">
    <span class="text-uppercase text-primary">Detalles de conectividad</span>
    <div class="row items-center q-ma-md" v-for="s in settingsProp" :key="s.label">
      <div class="col text-uppercase">{{ s.label }}</div>
      <div class="col text-grey-7">{{ s.state }}</div>
      <div class="col">
        <q-select v-if="s.select" v-model="s.value" :label="s.inputLabel" :options="Masks"/>
        <q-input v-model="s.value" outlined v-else/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ConfigField, Masks } from 'components/old/models'
import { PropType } from '@vue/composition-api'

export default {
  // name: 'ComponentName',
  data(): any {
    return {
      Masks,
      settings: ''
    }
  },
  props: {
    settingsProp: {
      type: (Array as unknown) as PropType<ConfigField[]>,
      default: () => []
    }
  }
}
</script>
