import { RouteConfig } from 'vue-router';
import ResponsiveLayout from 'layouts/ResponsiveLayout.vue';
import Error404 from 'pages/Error404.vue';
import Login from 'pages/Login.vue';
import Dashboard from 'pages/Dashboard.vue';
import Humidity from 'pages/graphs/Humidity.vue';
import Power from 'pages/graphs/Power.vue';
import Precipitation from 'pages/graphs/Precipitation.vue';
import Pressure from 'pages/graphs/Pressure.vue';
import Temperature from 'pages/graphs/Temperature.vue';
import Wind from 'pages/graphs/Wind.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: ResponsiveLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'humidity', component: Humidity },
      { path: 'power', component: Power },
      { path: 'precipitation', component: Precipitation },
      { path: 'pressure', component: Pressure },
      { path: 'temperature', component: Temperature },
      { path: 'wind', component: Wind },
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
