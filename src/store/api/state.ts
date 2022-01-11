
export interface ApiStateInterface {
  masterUri: string;

  temperature_c: number,
  humidity: number,
  wind_speed_average: number,
  wind_direction_average: number,
  pressure: number,
  power: number,
  water_count: number,
  light: number,
  date: number
  logs: string

  ws?: WebSocket

  [index: string]: any,
}

function state(): ApiStateInterface {
  return {
    date: 0,
    masterUri: '192.168.4.1',
    light: 0,
    power: 0, precipitation: 0, pressure: 0,
    temperature_c: 0, humidity: 0, windSpeed: 0,
    windDirection: '', wind_direction_average: 0, water_count: 0,
    wind_speed_average: 0,
    logs: ''
  }
}

export default state
