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
import Monitor from 'pages/Monitor.vue';
import Connectivity from 'pages/config/Connectivity.vue';
import Sensors from 'pages/config/Sensors.vue';
import Storage from 'pages/config/Storage.vue';
import User from 'pages/config/User.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: ResponsiveLayout,
    children: [
      {
        path: '', component: Dashboard,
        children: [
          { path: '', component: Monitor, name: 'Tablero' },
          { path: 'humidity', component: Humidity, name: 'Humedad', meta: { icon: '' } },
          { path: 'power', component: Power, name: 'Generacion Electrica', meta: { icon: 'wind_turbine' } },
          { path: 'precipitation', component: Precipitation, name: 'Precipitaciones', meta: { icon: '028-drop' } },
          { path: 'pressure', component: Pressure, name: 'Presion Atmosferica', meta: { icon: 'barometer' } },
          { path: 'temperature', component: Temperature, name: 'Temperatura' },
          { path: 'wind', component: Wind, name: 'Viento', meta: { icon: 'vane' } }
        ]
      },
      {
        path: 'connectivity', component: Connectivity, name: 'Conectividad'
      },
      {
        path: 'sensors', component: Sensors, name: 'Sensores'
      },
      {
        path: 'storage', component: Storage, name: 'Almacenamiento'
      },
      {
        path: 'user', component: User, name: 'Usuario'
      }
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
