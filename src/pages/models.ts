export interface Sensor {
  state: string,
  img: string,
  desc: string,
  sensor: string,
  toggled: boolean
}

const tempSensors: string[] = ['Seleccionar', 'DHT21', 'DHT22'];
const presSensors: string[] = ['Seleccionar', 'BMP 180'];

export const sensorList = {
  temp: tempSensors,
  pres: presSensors
}

