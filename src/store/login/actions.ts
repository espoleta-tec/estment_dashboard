import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { LoginStateInterface } from './state';
import { api } from 'boot/axios';


const actions: ActionTree<LoginStateInterface, StateInterface> = {
  checkAuth(context) {
    api.get('refresh').then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err.message);
      context.commit('login/resetToken');
    });
  }
};

export default actions;
