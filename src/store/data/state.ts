export interface DataStateInterface {
  [index: string]: number,
  temperature: number,
  humidity: number,
  windSpeed: number
}

function state(): DataStateInterface {
  return {
    temperature: 0,
    humidity: 0,
    windSpeed: 0
  };
}

export default state;