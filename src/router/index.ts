import { route } from 'quasar/wrappers'
import VueRouter from 'vue-router'
import { Store } from 'vuex'
import { StateInterface, theStore } from '../store'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default route<Store<StateInterface>>(function({ Vue }) {
  Vue.use(VueRouter)

  const router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,


    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  router.beforeEach((to, from, next) => {
    // theStore.dispatch('api/getLogs').catch((e: Error) => {
    //   console.log(e.message)
    // })
    next()
  })

  return router
})
