export interface ApiStateInterface {
  masterUri: string;

  temperature_c: number,
  humidity: number,
  windSpeed: number,
  windDirection: string,
  pressure: number,
  power: number,
  precipitation: number,
  light: number,
  date: number
  logs: string

  [index: string]: any,
}

function state(): ApiStateInterface {
  return {
    date: 0,
    masterUri: '192.168.4.1',
    light: 0,
    power: 0, precipitation: 0, pressure: 0,
    temperature_c: 0, humidity: 0, windSpeed: 0,
    windDirection: '',
    logs: ''
  }
}

export default state
