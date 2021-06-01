import { MutationTree } from 'vuex';
import { ApiStateInterface } from './state';
import { DataStateInterface } from 'src/store/data/state';

const mutation: MutationTree<ApiStateInterface> = {
  changeMasterUri(state: ApiStateInterface, payload: string) {
    state.masterUri = payload;
  },
  updateState(state: DataStateInterface, payload: string) {
    const values = payload.split(',');
    values.forEach(x => {
      const pair = x.split('=');
      state[pair[0]] = pair[1];
    });
  }
};

export default mutation;
