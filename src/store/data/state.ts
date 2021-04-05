export interface DataStateInterface {
  [index: string]: any,

  temperature: number,
  humidity: number,
  windSpeed: number,
  windDirection: string,
  pressure: number,
  power: number,
  precipitation: number,
}

function state(): DataStateInterface {
  return {
    power: 0, precipitation: 0, pressure: 0,
    temperature: 0, humidity: 0, windSpeed: 0,
    windDirection: ''
  };
}

export default state;
