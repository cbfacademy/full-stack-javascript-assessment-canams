export type SkinProfile = {
  type: "oily" | "dry" | "normal" | "combination" | "sensitive"
  concerns: string[]
  prevRoutine: string[]
  complexity: "minimal" | "essential" | "balanced" | "extensive" | "NA"
  budget: "basic" | "mid-range" | "luxury"
}

