export type SkinProfile = {
  type: "oily" | "dry" | "normal" | "combination" | "sensitive"
  concerns:
    | "hyperpigmentation"
    | "acne"
    | "aging"
    | "dehydration"
    | "dark circles"
  prevRoutine: string[]
  complexity: "minimal" | "essential" | "balanced" | "extensive" | "NA"
  budget: "basic" | "mid-range" | "luxury"
}

