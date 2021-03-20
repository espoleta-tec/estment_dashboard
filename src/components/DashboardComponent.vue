<template>
  <q-route-tab :to="to">
    <div class=" flex flex-center flex-inline no-wrap text-uppercase">
      <q-img ratio="1" :src="img" width="50px"/>
      <div class="column text-left q-ma-sm">
        <span class="text-h6">{{state}}</span>
        <span>{{label}}</span>
      </div>
    </div>
  </q-route-tab>
</template>

<script lang="ts">
export default {
  // name: 'ComponentName',
  data () {
    return {}
  },
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    }
  }
}
</script>
