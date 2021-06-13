import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ApiStateInterface } from './state';
import { api } from 'boot/axios';

let ws: WebSocket;

export { ws };

const actions: ActionTree<ApiStateInterface, StateInterface> = {
  changeMaster(context) {
    api.defaults.baseURL = `http://${context.state.masterUri}/`;
    console.log(api.defaults.baseURL);

    openWebSocket();

    function openWebSocket() {
      ws = new WebSocket(`ws://${context.state.masterUri}:81/`);
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
  },
  syncTime(context) {
    const updateMessage = `time=${Math.floor(Date.now() / 1000)}`;
    console.log(`${Date.now()} ${updateMessage}`);
    console.log(Intl.DateTimeFormat().format(Date.now()));
    ws.send(updateMessage);
  }
};


export default actions;

