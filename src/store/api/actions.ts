import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ApiStateInterface } from './state';
import { api } from 'boot/axios';

const actions: ActionTree<ApiStateInterface, StateInterface> = {
  changeMaster(context) {
    api.defaults.baseURL = `http://${context.state.masterUri}/`;
    console.log(api.defaults.baseURL);

    openWebSocket();

    function openWebSocket() {
      const ws = new WebSocket(`ws://${context.state.masterUri}:81/`);
      ws.onopen = () => {
        console.log('websocket connection opened');
        ws.send('vue client connected');
        ws.onmessage = (event) => {
          context.commit('updateState', event.data);
        };
        ws.onclose = () => {
          setTimeout(() => {
            openWebSocket();
          }, 500);
        };
      };
    }
  }
};


export default actions;

