<template>
  <q-page class="text-white row q-pa-lg" padding>
    <!-- content -->
    <div class="col-12 column">
      <div class="col-auto row items-center" v-for="n in 6" :key="n">
        <q-icon class="col-auto text-h4" name="temperature"/>
        <div class="col q-pa-md">
          <q-select input-class="text-secondary" borderless dense color="secondary" label-color="white" label="temperatura" dark v-model="selected" :options="options" dropdown-icon="arrow-down"/>
        </div>
      </div>
    </div>
    <div class="col-12 flex q-pa-md">
      <div class="row items-end text-h5 justify-center" v-for="n in 2" :key="n">
        <q-icon name="sd_filled" class="text-h3 col"/>
        <div class="col-auto"><q-input style="width: 3em" dark type="number" input-class="text-h5 text-secondary" v-model="time"/></div>
        <div class="col">lecturas</div>
      </div>
    </div>
    <div class="col-12 flex flex-center">
      <q-btn icon="save" class="text-h4" flat/>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';

  export default defineComponent({
    // name: 'PageName',
    data() {
      return {
        selected: 1,
        options: [1, 2, 3],
        time: 15,
      };
    }
  });
</script>
