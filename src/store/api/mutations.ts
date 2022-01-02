import { MutationTree } from 'vuex'
import { ApiStateInterface } from './state'

const mutation: MutationTree<ApiStateInterface> = {
  changeMasterUri(state: ApiStateInterface, payload: string) {
    state.masterUri = payload
  },
  updateState(state: ApiStateInterface, payload: string) {
    const values = payload.split(',')
    values.forEach(x => {
      const [key, value] = x.split('=')
      state[key] = value
    })
  },
  updateLogs(state: ApiStateInterface, payload: string) {
    state.logs = payload
  }
}

export default mutation
