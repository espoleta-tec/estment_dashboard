<template>
  <q-page class="row no-wrap text-white bg-dark" padding>
    <!-- content -->
    <GraphView class="col-12"/>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    // name: 'PageName',
    mounted() {
      this.$store.commit('layout/changeCurrentView', 'Generacion Electrica');
    }
  });
</script>
