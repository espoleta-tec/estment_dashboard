import { MutationTree } from 'vuex'
import { LoginStateInterface } from './state'
import { api } from 'boot/axios'

const mutation: MutationTree<LoginStateInterface> = {
  changeToken(state: LoginStateInterface, payload: string) {
    state.token = payload
    api.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
  },
  resetToken(state: LoginStateInterface) {
    state.token = ''
  }
}

export default mutation
