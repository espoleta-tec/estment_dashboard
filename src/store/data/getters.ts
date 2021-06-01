import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { DataStateInterface } from './state';

const getters: GetterTree<DataStateInterface, StateInterface> = {
  // temperature(context): string {
  //   return `${leftPadding(Math.ceil(context.temperature_c), 2)}°`;
  // }
};

export default getters;


