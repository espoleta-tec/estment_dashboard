<template>
  <q-page padding class="text-uppercase text-primary row">
    <div class="col-12 col-lg q-pa-md">
      <sh1>acceso al dispositivo</sh1>
      <q-separator class="q-ma-md" color="primary"/>
      <span>credenciales</span>
      <div class="row q-gutter-sm fields q-pa-sm text-black items-center" v-for="f in fields" :key="f.label">
        <div class="col">{{f.label}}</div>
        <div class="col text-grey-7">{{f.state}}</div>
        <div class="col column" style="text-transform: none">
          <q-input class="bg-white" color="primary" outlined v-model="f.value" :label="f.inputLabel"
                   :type="f.password ? 'password': ''"/>
        </div>
      </div>
      <q-separator class="q-ma-md" color="primary"/>
      <span>conexiones</span>
      <div class="row q-gutter-sm fields q-pa-sm text-black items-center" v-for="f in conections" :key="f.label">
        <div class="col">{{f.label}}</div>
        <div class="col text-grey-7">{{f.state}}</div>
        <div class="col column" style="text-transform: none">
          <q-input class="bg-white" color="primary" outlined v-model="f.value" :label="f.inputLabel" type="number"/>
        </div>
      </div>

      <div class="flex flex-center q-ma-lg">
        <q-btn label="guardar" color="primary" unelevated/>
      </div>
    </div>

  </q-page>
</template>

<script>
  export default {
    // name: 'PageName',
    data() {
      return {
        fields: [
          { label: 'usario', state: 'cargando datos...', inputLabel: 'Nuevo nombre de usuario', value: '' },
          {
            label: 'contraseña',
            state: '',
            inputLabel: 'Nueva contraseña',
            value: '',
            password: true
          }
        ],
        conections: [
          { label: 'Maximo de conexiones', state: 'cargando datos...', inputLabel: 'Maximo de conexiones', value: '' }
        ]
      };
    }
  };
</script>
<style lang="scss">
</style>
