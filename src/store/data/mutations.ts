import { MutationTree } from 'vuex';
import { DataStateInterface } from './state';

const mutation: MutationTree<DataStateInterface> = {
  updateState(state: DataStateInterface, payload: string) {
    const values = payload.split(',');
    values.forEach(x => {
      const pair = x.split('=');
      state[pair[0]] = pair[1];
    });
  }
};

export default mutation;
