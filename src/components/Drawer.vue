<template>
  <q-drawer
    bordered
    show-if-above
    side="left"
    v-model="leftDrawer"
    class="relative-position"
  >
    <!-- QScrollArea is optional -->
    <div class="bg-primary absolute-full"/>
    <q-scroll-area class="fit q-pa-sm text-white row">
      <!-- Content here -->
      <div class="col flex no-wrap q-pa-md items-center">
        <Logo class="text-h5"/>
        <q-space/>
        <q-btn @click="leftDrawer = false" class="text-h6" color="primary" flat icon="close-circle-f" round
               text-color="white"
               v-if="$q.screen.lt.md"/>
      </div>
      <q-item :key="n" @click="$router.push('/login')" class="row no-wrap flex items-center q-ma-md q-pa-sm text-h5"
              clickable v-for="n in 6">
        <q-icon name="user_filled"/>
        <span style="margin-left: 0.2rem;">Usuario</span>
      </q-item>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import Logo from 'components/Logo.vue';

  export default defineComponent({
    // name: 'ComponentName'
    components: {
      Logo
    },
    computed: {
      leftDrawer: {
        get: function() {
          return this.$store.state.layout.leftDrawer;
        },
        set: function(payload) {
          this.$store.commit('layout/toggleDrawer', payload);
        }
      }
    }
  });
</script>
<style lang="scss">
  .bg-drawer {
    /*filter: blur(50px);*/
  }
</style>
