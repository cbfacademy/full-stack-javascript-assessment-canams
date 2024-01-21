export type RoutineType = {
  profile: string
  day: DayRoutine
  treatments: Treatment[]
  focus: string[]
}

type DayRoutine = {
  ingredients: Steps[]
}

type Steps = {
  cleanse: string[]
  tone: string[]
  serum: string[]
  treat: string[]
  moisturise: string[]
  spf: string
}

type Treatment = {
  activity: string
  frequency: string
}

