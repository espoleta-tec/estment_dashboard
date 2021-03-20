import { MutationTree } from 'vuex';
import { LayoutState } from './state';

const mutation: MutationTree<LayoutState> = {
  toggleDrawer(state: LayoutState, payload: boolean) {
    state.leftDrawer = payload
  }
};

export default mutation;
