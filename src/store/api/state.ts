export interface ApiStateInterface {
  masterUri: string

  temperature_c: number
  humidity: number
  wind_speed_average: number
  wind_direction_average: number
  wind_direction_sec: number
  pressure_mercury_mm: number
  pressure: number
  power: number
  water_count: number
  light: number
  lightningCount: number
  date: number
  logs: string
  dew_point_c: number

  ws: WebSocket | null
  wsConnected: boolean

  [index: string]: any
}

function state(): ApiStateInterface {
  return {
    date: 0,
    masterUri: '192.168.4.1',
    light: 0,
    power: 0,
    pressure: 0,
    pressure_mercury_mm: 0,
    temperature_c: 0,
    humidity: 0,
    windSpeed: 0,
    windDirection: '',
    wind_direction_average: 0,
    wind_direction_sec: 0,
    water_count: 0,
    wind_speed_average: 0,
    lightningCount: 0,
    logs: '',
    ws: null,
    dew_point_c: 0,
    wsConnected: false
  }
}

export default state
