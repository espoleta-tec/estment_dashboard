<template>
  <q-page class="row text-white">
    <div class="col-12 column">
      <div class="text-red-6 text-h5 text-center" v-if="$store.getters['api/websocket'] === 0">
        No se encuentra conectado a ninguna estación.
      </div>
      <router-view v-else class="col"/>
      <q-space/>
      <div class="col-auto row">
        <div :key="elem.icon" class="col-4 col-sm-3 col-lg-2 col-xl-1 row q-pa-sm" v-for="elem in fourthBar">
          <q-btn :class="`col-12 row ${ $route.path === elem.to ? 'bg-secondary text-white' : ''}`"
                 :to="elem.to"
                 outline style="border-radius: 0.6rem" v-ripple:secondary>
            <div class="col row items-stretch self-stretch">
              <div
                :class="`col-12 text-left text-no-wrap ${ $route.path === elem.to ? 'text-white' : 'text-secondary'}`"
                style="font-size: 10pt; text-transform: none">
                {{ elem.text }}
              </div>
              <div :class="`col-grow flex ${elem.text.length === 0 ? 'flex-center' : 'items-end justify-end'}`">
                <q-icon :name="elem.icon" style="font-size: 2rem"/>
              </div>
            </div>
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { colors } from 'quasar'
import Helix from 'components/Helix.vue'

export default defineComponent({
  name: 'PageName',
  components: {
    Helix
  },
  data() {
    return {
      colors,
      twoBar: [],

      selected: 1
    }
  },
  computed: {
    fourthBar() {
      return [
        { text: `${this.$store.state.api.precipitation} mm`, icon: '028-drop', to: '/precipitation' },
        { text: `${this.$store.state.api.humidity}%`, icon: 'humidity', to: '/humidity' },
        { text: this.$store.getters['api/temperature'], icon: 'temperature', to: '/humidity' },
        { text: `${this.$store.state.api.windSpeed} m/s`, icon: '032-windsock', to: '/wind' },
        { text: '', icon: 'home_filled', to: '/' },
        { text: `${this.$store.getters['api/pressure']} hpa`, icon: 'barometer', to: '/pressure' },
        { text: 'Noreste', icon: 'vane', to: '/wind' },
        { text: `${this.$store.state.api.light} lux`, icon: 'sun' },
        { text: '30M', icon: 'lightning-bolt' }
      ]
    }
  }
})
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
