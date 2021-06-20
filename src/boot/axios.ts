import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';

const api = axios.create({
  baseURL: process.env.DEV ? '/' : 'http://192.168.4.1/'
});


declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$axios = api;
});

export { api };
