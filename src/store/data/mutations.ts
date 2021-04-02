import { MutationTree } from 'vuex';
import { DataStateInterface } from './state';

const mutation: MutationTree<DataStateInterface> = {
  updateState(state: DataStateInterface, payload: string) {
    const values = payload.split(',');
    // state.temperature = Number.parseFloat(values.filter(x => x.indexOf('temp') !== -1)[0].split('=')[1]).toPrecision(2);
    // state.humidity = Number.parseFloat(values.filter(x => x.indexOf('humidity') !== -1)[0].split('=')[1]).toPrecision(2);
    // state.windSpeed = Number.parseFloat(values.filter(x => x.indexOf('wind') !== -1)[0].split('=')[1]).toPrecision(2);
    values.forEach(x => {
      const pair = x.split('=');
      state[pair[0]] = Number.parseInt(pair[1]);
    });
  }
};

export default mutation;
