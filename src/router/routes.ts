import { RouteConfig } from 'vue-router';
import ResponsiveLayout from 'layouts/ResponsiveLayout.vue';
import Error404 from 'pages/Error404.vue';
import Login from 'pages/Login.vue';
import Dashboard from 'pages/Dashboard.vue';
import Humidity from 'pages/graphs/Humidity.vue';
import Power from 'pages/graphs/Power.vue';
import Pressure from 'pages/graphs/Pressure.vue';
import Temperature from 'pages/graphs/Temperature.vue';
import Wind from 'pages/graphs/Wind.vue';
import Precipitation from 'pages/graphs/Precipitation.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: ResponsiveLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'humidity', component: Humidity, name: 'Humedad' },
      { path: 'power', component: Power, name: 'Generacion Electrica' },
      { path: 'precipitation', component: Precipitation,name: 'Precipitaciones' },
      { path: 'pressure', component: Pressure, name: 'Presion Atmosferica' },
      { path: 'temperature', component: Temperature, name: 'Temperatura' },
      { path: 'wind', component: Wind, name: 'Viento' }
    ]
  },
  {
    path: '/login', component: Login
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: Error404
  }
];

export default routes;
