import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { NetState } from './state';

const getters: GetterTree<NetState, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
