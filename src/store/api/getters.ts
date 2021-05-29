import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ApiStateInterface } from './state';

const getters: GetterTree<ApiStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
