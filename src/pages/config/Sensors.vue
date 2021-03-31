<template>
  <q-page class="text-white row q-pa-lg" padding>
    <!-- content -->
    <div class="col-12 column">
      <div :key="n" class="col-auto row items-center" v-for="n in 6">
        <q-icon class="col-auto text-h4" name="temperature"/>
        <div class="col q-pa-md">
          <q-select :options="options" color="secondary" dark dense label="temperatura"
                    v-model="selected"/>
        </div>
      </div>
    </div>
    <div class="col-12 row q-pa-md">
      <div :key="n" class="col-12 row no-wrap items-center" v-for="n in 2">
        <q-icon class="col-auto q-ma-md text-h3" name="sd_filled"/>
        <q-select :options="timeOptions" class="col-6" color="secondary" dark hide-dropdown-icon
                  input-class="text-right"
                  label="Frecuencia de Lectura" suffix="MINS" v-model="time">
        </q-select>
      </div>
    </div>
    <div class="col-12 flex flex-center">
      <q-btn class="text-h4" color="secondary" flat icon="save" round/>
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
        timeOptions: [5, 15, 30, 60]
      };
    }
  });
</script>
