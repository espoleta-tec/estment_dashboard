<template>
  <q-page padding class=" row">
    <div class="col-12 col-lg q-pa-md">
      <sh1>configuracion</sh1>
      <q-separator class="q-ma-md" color="primary"/>
      <span class="text-body1 text-uppercase text-primary">identificacion</span>
      <div class="row text-black q-ma-md items-center">
        <div class="col">{{ identification.label }}</div>
        <div class="col text-grey-7">{{ identification.state }}</div>
        <div class="col column" style="text-transform: none">
          <q-input class="bg-white" color="primary" v-model="identification.value" :label="identification.inputLabel"/>
        </div>
      </div>

      <span class="text-body1 text-uppercase text-primary">modo de trabajo</span>
      <div class="flex justify-evenly text-uppercase">
        <q-radio v-model="mode" label="punto de acceso" :val="true"/>
        <q-radio v-model="mode" label="estacion" :val="false"/>
      </div>
      <APSettings v-if="mode" :settings-prop="apSettings"/>
      <StationSettings :settings-prop="stationSettings" v-else/>
      <div class="flex flex-center q-ma-md">
        <q-btn label="guardar" unelevated color="primary"/>
      </div>

    </div>
  </q-page>
</template>

<script>
import APSettings from 'components/old/APSettings'
import StationSettings from 'components/old/StationSettings'

export default {
  // name: 'PageName',
  components: {
    APSettings, StationSettings
  },
  data() {
    return {
      identification: {
        label: 'identificacion',
        state: 'cargando datos...',
        inputLabel: 'Nueva identificacion',
        value: ''
      },
      mode: true,
      apSettings: [
        {
          label: 'rssid',
          state: 'cargando datos...',
          inputLabel: 'Nueva identificacion',
          value: ''
        }, {
          label: 'password',
          state: '',
          inputLabel: 'Nuevo password',
          value: '',
          password: true
        }, {
          label: 'direccion ip',
          state: 'cargando datos...',
          inputLabel: 'nueva direccion ip',
          value: ''
        }, {
          label: 'mascara de red',
          state: 'cargando datos...',
          inputLabel: 'nueva mascara de red',
          value: '',
          select: true
        }
      ],
      stationSettings: [
        {
          id: 'ssid',
          label: 'ssid',
          option: 'dota-2',
          value: '',
          optionLabel: 'Redes encontradas',
          valueLabel: 'Password',
          password: true
        },
        {
          id: 'ip',
          label: 'Direccion IP',
          option: 'dhcp',
          value: '',
          optionLabel: 'Asignacion de ip',
          valueLabel: 'Nueva direccion IP'
        }
      ]
    }
  }
}
</script>
