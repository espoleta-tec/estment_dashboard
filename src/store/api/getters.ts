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
    const obj = array.map(log => {
      let props = log.split(',')
      props = props.filter(k => k.indexOf('=') != -1)

      const obj: Record<string, unknown> = {}
      props.map(p => {
        const [key, value] = p.split('=')
        obj[key] = parseFloat(value)
        if (isNaN(obj[key] as any)) {
          obj[key] = new Date(unquote(value)).getTime() || unquote(value)
        }
      })
      return obj
    }).filter(o => {
      if (o !== undefined && o.date !== undefined) {
        return true
      }
    })
    return obj
  },
  gData: (context: GetterTree<ApiStateInterface, StateInterface>) => (variable: string) => {
    const logs = context.logs as any

    const array = logs.split('\r\n')
    const obj2 = array.map((log: any) => {
      let props = log.split(',')
      props = props.filter((k: any) => k.indexOf('=') != -1)

      const obj: Record<string, unknown> = {}
      props.map((p: any) => {
        const [key, value] = p.split('=')

        obj[key] = parseFloat(value)
        if (isNaN(obj[key] as any)) {
          obj[key] = new Date(unquote(value)).getTime() || unquote(value)
        }
      })
      console.log(obj)
      return obj
    }).filter((o: any) => {
      if (o !== undefined && o.date !== undefined) {
        return true
      }
    })
    return obj2.map((d: ApiStateInterface) => ({ x: d.date, y: d[variable] || 0 }))
  },
  pressure(context): number {
    return Math.round(context.pressure / 100)
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
