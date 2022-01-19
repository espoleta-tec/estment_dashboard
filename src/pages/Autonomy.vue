<template>
  <q-page padding class="row">
    <div class="col-12 col-lg q-pa-md">
      <div class="flex flex-center">
        <div id="battery" class="battery">
          <div class="battery-notch"></div>
        </div>
      </div>
      <div class="flex flex-center q-pa-md">Cargando ...</div>
      <q-separator color="primary"/>
      <div class="q-ma-lg">
        <StateParameter class="q-ma-md" :label="p.label" :value="p.value" v-for="p in params" :key="p.label"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import StateParameter from 'components/old/StateParameter'

export default {
  // name: 'PageName',
  data() {
    return {
      params: [
        { label: 'Identificacion', value: 'Bateria adjunta Tipo BB(Poe)' },
        { label: 'Nivel de Carga', value: '68%' },
        { label: 'Autonomia', value: '1d 3hrs restantes' }
      ]
    }
  },
  components: {
    StateParameter
  }
}
</script>
<style lang="scss">
.battery-notch {
  width: 15px;
  height: 40px;
  background: $dark;
  margin-right: -15px;
  margin-top: 10px;
  float: right
}

.battery {
  width: 100px;
  height: 60px;
  border-radius: 5px;
  border: solid 2px $dark;
  animation: charge 5s linear infinite;
}

@keyframes charge {
  0% {
    box-shadow: inset 0 0 0 rgb(247, 2, 2);
  }
  100% {
    box-shadow: inset 100px 0 0 rgb(2, 194, 34);
  }
}
</style>
