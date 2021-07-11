<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <Header/>
    </q-header>


    <q-drawer
      v-model="leftDrawer"
      side="left"
      bordered
      content-class="bg-grey-6"
    >
      <!-- QScrollArea is optional -->
      <LeftDrawer/>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
  import Header from 'components/old/Header.vue';
  import LeftDrawer from 'components/old/LeftDrawer.vue';
  import { defineComponent } from '@vue/composition-api';


  export default defineComponent({
    // name: 'LayoutName',

    data() {
      return {};
    },
    components: {
      Header,
      LeftDrawer
    },
    computed: {
      leftDrawer(): boolean {
        return this.$store.state.layout.leftDrawer;
      }
    },
    mounted(): void {
      this.$store.commit('layout/changeCurrentView', 'Fuck')
      this.$store.dispatch('net/getNet')
        .then(() => {
          console.log('data loaded');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
</script>
<style lang="scss">
  .heading {
    background: $grey-4;
    font-weight: bold;
  }

  section {
    $custom-border: solid 1px $primary;
    border-top: $custom-border;
    border-bottom: $custom-border;
  }

  h1 {
    font-size: 14pt;
    font-weight: bolder;
    margin: 0;
    background: $primary;
    color: white;
    padding: 0 1rem;
  }

  h2 {
    font-size: 12pt;
    font-weight: bold;
  }
</style>
