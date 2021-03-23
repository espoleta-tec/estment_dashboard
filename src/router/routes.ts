import { RouteConfig } from 'vue-router';
import ResponsiveLayout from 'layouts/ResponsiveLayout.vue';
import Index from 'pages/Index.vue';
import Error404 from 'pages/Error404.vue';
import Login from 'pages/Login.vue';
import Dashboard from 'pages/Dashboard.vue';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: ResponsiveLayout,
    children: [
      { path: '', component: Dashboard },
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
