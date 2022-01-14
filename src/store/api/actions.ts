import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { ApiStateInterface } from './state'
import { api } from 'boot/axios'

let ws: WebSocket

const actions: ActionTree<ApiStateInterface, StateInterface> = {
  changeMaster(context) {
    api.defaults.baseURL = `http://${context.state.masterUri}/`
    console.log(api.defaults.baseURL)

    openWebSocket()

    function openWebSocket() {
      // context.commit('updateWs', new WebSocket(`ws://${context.state.masterUri}:81/`))
      console.log('starting websocket')
      ws = new WebSocket(`ws://${context.state.masterUri}:81/`)
      // if (!context.state.ws) return
      // ws = context.state.ws

      ws.onopen = () => {
        console.log('websocket connection opened')
        ws.send('vue client connected')
        ws.onmessage = (event) => {
          context.commit('updateState', event.data)
        }
        ws.onclose = () => {
          setTimeout(() => {
            openWebSocket()
          }, 500)
        }
      }
    }
  },
  syncTime() {
    const updateMessage = `time=${Math.floor(Date.now() / 1000)}`
    console.log(`${Date.now()} ${updateMessage}`)
    console.log(Intl.DateTimeFormat().format(Date.now()))
    ws.send(updateMessage)
  },
  async getLogs(context) {
    const logs = await api.get('logs')

    context.commit('updateLogs', logs.data)
  }
}


export default actions

