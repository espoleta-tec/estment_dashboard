import { MutationTree } from 'vuex';
import { ApiStateInterface } from './state';

const mutation: MutationTree<ApiStateInterface> = {
  changeMasterUri(state: ApiStateInterface, payload: string) {
    state.masterUri = payload;
  }
};

export default mutation;
