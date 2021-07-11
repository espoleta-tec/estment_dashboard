import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { ApiStateInterface } from './state'
import { unquote } from '@amcharts/amcharts4/.internal/core/utils/Utils'

const getters: GetterTree<ApiStateInterface, StateInterface> = {
  temperature(context): string {
    return `${leftPadding(Math.ceil(context.temperature_c), 2)}°`
  },
  graphData(context): Record<string, unknown>[] | string[] {
    const logs = context.logs

    const array = logs.split('\r\n')
    const graphData = array.map(log => {
      let props = log.split(',')
      props = props.filter(k => k.indexOf('=') != -1)

      const obj: Record<string, unknown> = {}
      props.map(p => {
        const [key, value] = p.split('=')

        obj[key] = parseFloat(value) || new Date(unquote(value)).getTime() || unquote(value)
      })
      return obj
    }).filter(o => {
      if (o !== undefined && o.date !== undefined) {
        return true
      }
    })

    return graphData
  },
  pressure(context): number {
    return Math.round(context.pressure/100)
  }
}

export default getters

function leftPadding(number: number, padding: number, replace: any = 0): string {
  let sn = String(number)
  let prefix = ''
  if (sn.length < padding) {
    for (let i = 0; i < padding - sn.length; i++) {
      prefix += String(replace)
    }
  }
  sn = prefix + sn

  return sn
}
