<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <Header/>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer v-show="false">
      <q-tabs switch-indicator>
        <q-route-tab
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>

      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
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
      <!-- This is where pages get injected -->
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
  import Header from 'components/Header.vue';
  import LeftDrawer from 'components/LeftDrawer.vue';
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
