import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { TimeStateInterface } from './state'

const getters: GetterTree<TimeStateInterface, StateInterface> = {
  currentCycle(context) {
    const left = context.phaseStart
    const right = context.phaseEnd
    if (left.getMonth() === right.getMonth()) {
      return `${left.getDate()} - ${right.getDate()} ${Intl.DateTimeFormat('es', { month: 'short' }).format(left)}`
    }
    return `${left.getDate()} ${Intl.DateTimeFormat('es', { month: 'short' }).format(left)} - ${right.getDate()} ${Intl.DateTimeFormat('es', { month: 'short' }).format(right)}`
  }
}

export default getters
