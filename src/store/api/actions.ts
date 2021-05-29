import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ApiStateInterface } from './state';

const actions: ActionTree<ApiStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
