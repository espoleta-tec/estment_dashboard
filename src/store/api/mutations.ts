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
      if (!isNaN(Number.parseFloat(value))) {
        state[key] = Number.parseFloat(value)
      }
    })
  },
  updateLogs(state: ApiStateInterface, payload: string) {
    state.logs = payload
  },
  updateWs(state: ApiStateInterface, payload: WebSocket) {
    state.ws = payload
  }
}

export default mutation
