import axios, { AxiosInstance } from 'axios';
import { boot } from 'quasar/wrappers';

const api = axios.create({baseURL: 'http://127.0.0.1:5000'})

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance;
  }
}

export default boot(({ Vue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  Vue.prototype.$axios = axios;
});

export {api, axios}
