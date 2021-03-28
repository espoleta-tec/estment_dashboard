<template>
  <div class="row no-wrap text-white bg-dark">
    <!-- content -->
    <GraphView class="col-12"/>
  </div>
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
