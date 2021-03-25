<template>
  <div class="q-form q-ma-md">
    <span class="text-uppercase text-primary">Configuracion</span>
    <div class="row items-center q-ma-md" v-for="s in settingsProp" :key="s.label">
      <div class="col text-uppercase">{{s.label}}</div>
      <div class="col q-pa-md">
        <q-select v-model="s.option" :label="s.optionLabel" :options="StationNoms[s.id]"/>
      </div>
      <div class="col q-pa-md">
        <q-input v-model="s.value" :label="s.valueLabel" outlined :type="s.password ? 'password': ''"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { StationNoms, StationSettingsField } from './models';
  import { PropType } from '@vue/composition-api';

  export default {
    // name: 'ComponentName',
    data() {
      return {
        StationNoms
      };
    },
    props: {
      settingsProp: {
        type: (Array as unknown) as PropType<StationSettingsField[]>,
        default: () => []
      }
    }
  };
</script>
