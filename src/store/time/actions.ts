import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { TimeStateInterface } from './state'

const actions: ActionTree<TimeStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
}

export default actions
