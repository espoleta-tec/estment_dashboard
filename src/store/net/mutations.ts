import { MutationTree } from 'vuex';
import { NetState } from './state';

const mutation: MutationTree<NetState> = {
  changeSSID (state: NetState, payload: string) {
    state.ssid = payload
  },
  changeIP (state: NetState, payload: string) {
    state.ip = payload
  },
  changeIpMask (state: NetState, payload: string) {
    state.ipmask = payload
  },
  changeMac (state: NetState, payload: string) {
    state.mac = payload
  },
  changeDeviceId (state: NetState, payload: string) {
    state.deviceId = payload
  },
  changedeviceModel (state: NetState, payload: string) {
    state.deviceModel = payload
  },
  changesoftVersion (state: NetState, payload: string) {
    state.softVersion = payload
  },
  changeoperationMode (state: NetState, payload: number) {
    state.operationMode = payload
  }

};

export default mutation;
