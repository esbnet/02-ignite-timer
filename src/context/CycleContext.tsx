import { createContext } from "react"

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

interface CycleContextType {
  activeCycle?: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCyclesAsFinished: () => void
  setSecondsPassed: (second: number) => void
}

export const CyclesContext = createContext({} as CycleContextType)

export function CycleContextProvider() {
    
}