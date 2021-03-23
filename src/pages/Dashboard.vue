<template>
  <q-page padding class="bg-primary flex">
    <!-- content -->
    <meter-bar rounded color="temperature-gradient" v-model="progress" width="3rem"/>
  </q-page>
</template>

<script lang="ts">
  import MeterBar from 'components/MeterBar.vue';
  import { defineComponent } from '@vue/composition-api';
  import { colors } from 'quasar';

  export default defineComponent({
    // name: 'PageName'
    components: {
      MeterBar
    },
    data() {
      return {
        progress: 0.7,
        colors
      };
    }
  });
</script>
