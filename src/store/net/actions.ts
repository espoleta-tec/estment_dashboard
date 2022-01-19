import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { NetState } from './state'
import axios from 'axios'


const actions: ActionTree<NetState, StateInterface> = {
  getNet(context) {
    axios.get<string>('/net')
      .then((resp) => {
        console.log(resp)
        const array = resp.data.split(',')
        context.commit('changeSSID', array[0])
        context.commit('changeIP', array[1])
        context.commit('changeIpMask', array[2])
        context.commit('changeMac', array[3])
        context.commit('changeDeviceId', array[4])
        context.commit('changedeviceModel', array[5])
        context.commit('changesoftVersion', array[6])
        context.commit('changeoperationMode', parseInt(array[7]))
      })
      .catch(error => console.log(error))
  }
}

export default actions
