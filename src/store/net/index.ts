import { Module } from 'vuex'
import { StateInterface } from '../index'
import state, { NetState } from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const net: Module<NetState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default net
