<template>
  <q-page class="row text-white">
    <!-- content -->
    <!--    <meter-bar rounded color="temperature-gradient" v-model="progress" width="3rem"/>-->
    <div class="col-12 column">
      <router-view class="col"/>
      <q-space/>
      <div class="col-auto row">
        <div :key="elem.to" class="col-4 col-sm-3 col-lg-2 col-xl-1 row q-pa-sm" v-for="elem in fourthBar">
          <q-btn :class="`col-12 row q-pa-sm ${ $route.path === elem.to ? 'bg-secondary text-white' : ''}`"
                 :to="elem.to"
                 outline style="border-radius: 0.6rem" v-ripple:secondary>
            <div class="col-12 row items-stretch">
              <div
                :class="`col-12 text-left text-no-wrap ${ $route.path === elem.to ? 'text-white' : 'text-secondary'}`"
                style="font-size: 10pt">
                {{elem.text}}
              </div>
              <!--              <q-space/>-->
              <div :class="`col-12 flex ${elem.text.length === 0 ? 'flex-center' : 'items-end justify-end'}`">
                <q-icon :name="elem.icon" style="font-size: 2rem"/>
              </div>
              <div class="col"></div>
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { colors } from 'quasar';
  import Helix from 'components/Helix.vue';

  export default defineComponent({
    name: 'PageName',
    components: {
      Helix
    },
    data() {
      return {
        temp: 0.5,
        humidity: 0.8,
        colors,
        twoBar: [],

        selected: 1

        // gaugeColors: [
        //   { offset: 0, color: '#808080' },
        //   { offset: 100, color: '#00d6fc' }
        // ]
      };
    },
    computed: {
      fourthBar() {
        return [
          // { text: 'ESTE', icon: 'vane', to: '/wind' },
          { text: '70mm', icon: '028-drop', to: '/precipitation' },
          { text: '70mm', icon: '028-drop' },
          { text: this.$store.getters['api/temperature'], icon: 'temperature', to: '/humidity' },
          { text: '5 m/s', icon: '032-windsock', to: '/wind' },
          { text: '', icon: 'home_filled', to: '/' },
          { text: '1002hpa', icon: 'barometer', to: '/pressure' },
          // { text: '1.8 W', icon: '', to: '/power' },
          { text: '' },
          { text: 'lol', icon: '001-sun' },
          { text: '' }
          // { text: 'fefe', icon: 'earthquake-and-home' }
        ];
      }
    }

  });
</script>
<style lang="scss">
  $theBorder: solid rgba(255, 255, 255, 0.1) 1px;
  .splitSession {
    border-top: $theBorder;
    border-bottom: $theBorder;
  }

  .verticalSplit {
    border-left: $theBorder;
    border-right: $theBorder;
  }

  .leftSplit {
    border-left: $theBorder;
  }

  /*.q-btn:hover {
    background: $secondary !important;
  }

  .q-btn:hover div {
    color: white !important;
  }
   */
</style>
