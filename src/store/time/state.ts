export interface MoonPhase {
  UNDEF: number,
  NEW: number,
  FIRST: number,
  FULL: number,
  THIRD: number
}

export const MOONS: MoonPhase = {
  UNDEF: -1,
  NEW: 0,
  FIRST: 1,
  FULL: 2,
  THIRD: 3
}

export interface TimeStateInterface {
  currentMoon: number,
  phaseStart: Date,
  phaseEnd: Date,
  currentPhase?: Date
}

function state(): TimeStateInterface {
  return {
    phaseEnd: new Date(), phaseStart: new Date(),
    currentMoon: MOONS.UNDEF
  }
}

export default state
