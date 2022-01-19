import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { LoginStateInterface } from './state'

const getters: GetterTree<LoginStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  }
}

export default getters
