<template>
  <div class="container">
    <div class="col">{{ label }}</div>
    <div class="col text-lowercase">{{ value }}</div>
    <div v-if="badge" class="col">
      <q-badge :label="badge"/>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  // name: 'ComponentName',
  data() {
    return {}
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    badge: {
      type: String,
      required: false
    }
  }
}
</script>
<style lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
