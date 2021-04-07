import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import layout from './layout';
import { LayoutState } from 'src/store/layout/state';
import net from './net';
import { NetState } from 'src/store/net/state';
import login from './login';
import { LoginStateInterface } from 'src/store/login/state';
import data from './data';
import { DataStateInterface } from 'src/store/data/state';
import time from './time';
import { TimeStateInterface } from 'src/store/time/state';

// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: unknown;
  layout: LayoutState,
  net: NetState,
  login: LoginStateInterface,
  data: DataStateInterface,
  time: TimeStateInterface
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  return new Vuex.Store<StateInterface>({
    modules: {
      // example
      layout,
      net,
      login,
      data,
      time
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });
});
