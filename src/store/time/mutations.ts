import { MutationTree } from 'vuex'
import { TimeStateInterface } from './state'

const mutation: MutationTree<TimeStateInterface> = {
  setPhases(state: TimeStateInterface) {
    const current = currentCycle()

    const high = moonCycle / 4
    let count = -high / 2, index = 0
    while (count + high < current) {
      count += high
      index++
    }

    const start = new Date(cicleToCalc() - (current - count) * millisPerDay)
    state.phaseStart = start
    state.phaseEnd = new Date(start.getTime() + high * millisPerDay)
    // console.log(current - count);
    state.currentMoon = index % 4
    // console.log(high)
    // console.log(current)
  }
}

export default mutation

const newMoonRef = new Date(2000, 0, 6, 12, 24, 1).getTime()
const millisPerDay = 1000 * 60 * 60 * 24
const moonCycle = 29.53

function cicleToCalc(): number {
  return new Date().getTime()
}

function currentCycle(): number {
  const currentDate = cicleToCalc()
  let timePassed = currentDate - newMoonRef
  timePassed /= millisPerDay
  const numberOfMoons = timePassed / moonCycle
  let currentCycle = numberOfMoons % 1
  currentCycle *= moonCycle

  return currentCycle
}
