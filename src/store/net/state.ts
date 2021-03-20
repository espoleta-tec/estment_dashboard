export interface NetState {
  ssid: string,
  ip: string,
  ipmask: string,
  mac: string,
  deviceId: string,
  deviceModel: string,
  softVersion: string,
  operationMode: number
}

function state(): NetState {
  return {
    ssid: '',
    ip: '',
    ipmask: '',
    mac: '',
    deviceId: '',
    deviceModel: '',
    softVersion: '',
    operationMode: 1
  };
}

export default state;
