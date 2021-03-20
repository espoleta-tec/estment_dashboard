<template>
  <q-page class="text-uppercase row">
    <div class="col-12 col-lg q-pa-md">
      <sh1>Estado</sh1>
      <section v-for="s in sections" :key="s.params[0].label">
        <h2>{{s.title}}</h2>
        <StateParameter :label="p.label" :value="p.value" :badge="p.badge ? p.badge : ''" v-for="p in s.params"
                        :key="p.label"/>
      </section>
    </div>
    <div class="col-12 col-lg-4 q-pa-md bg-accent">
      <StateLegend/>
    </div>
  </q-page>
</template>

<script>
  import StateParameter from 'components/StateParameter';
  import StateLegend from 'pages/docs/StateLegend';


  export default {
    // name: 'PageName',
    data() {
      return {
        sections: [
          {
            params: [
              { label: 'identificacion', value: 'cargando datos' },
              { label: 'version de firmware', value: 'cargando datos' },
              { label: 'hardware serie', value: 'cargando datos' }
            ]
          },
          {
            title: 'WIFI',
            params: [
              { label: 'RSSID', value: 'cargando datos' },
              { label: 'direccion ip', value: 'cargando datos', badge: 'DHCP' },
              { label: 'direccion mac', value: 'cargando datos' }
            ]
          },
          {
            title: 'lan',
            params: [
              { label: 'direccion mac', value: 'cargando datos' },
              { label: 'direccion ip', value: 'cargando datos', badge: 'Undefined' },
              { label: 'puerta de enlace', value: 'cargando datos' }
            ]
          }
        ]
      }
        ;
    },
    components: {
      StateParameter, StateLegend
    }
  };
</script>

<style scoped lang="scss">

</style>
