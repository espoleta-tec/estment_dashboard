import { MutationTree } from 'vuex'
import { LayoutState } from './state'

const mutation: MutationTree<LayoutState> = {
  toggleDrawer(state: LayoutState, payload: boolean) {
    state.leftDrawer = payload
  },
  changeCurrentView(state: LayoutState, payload: string) {
    state.currentView = payload
  }
}

export default mutation
