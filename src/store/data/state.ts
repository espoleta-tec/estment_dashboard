export interface DataStateInterface {
  temperature_c: number,
  humidity: number,
  windSpeed: number,
  windDirection: string,
  pressure: number,
  power: number,
  precipitation: number,
  light: number,

  [index: string]: any,
}

function state(): DataStateInterface {
  return {
    light: 0,
    power: 0, precipitation: 0, pressure: 0,
    temperature_c: 0, humidity: 0, windSpeed: 0,
    windDirection: ''
  };
}

export default state;
