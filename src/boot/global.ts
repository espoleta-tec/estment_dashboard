import Vue from 'vue'
import SectionHeader from 'components/old/SectionHeader.vue'
import GraphView from 'components/GraphView.vue'
import Helix from 'components/Helix.vue'
import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts'
import Logo from 'components/Logo.vue'

Vue.component(SectionHeader.name, SectionHeader)
Vue.component(GraphView.name, GraphView)
Vue.component(Helix.name, Helix)
Vue.component('VueApexCharts', VueApexCharts)
Vue.component(Logo.name, Logo)
