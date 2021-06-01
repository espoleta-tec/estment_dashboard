import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ApiStateInterface } from './state';

const getters: GetterTree<ApiStateInterface, StateInterface> = {
  temperature(context): string {
    return `${leftPadding(Math.ceil(context.temperature_c), 2)}°`;
  }
};

export default getters;

function leftPadding(number: number, padding: number, replace: any = 0): string {
  let sn = String(number);
  let prefix = '';
  if (sn.length < padding) {
    for (let i = 0; i < padding - sn.length; i++) {
      prefix += String(replace);
    }
  }
  sn = prefix + sn;

  return sn;
}
