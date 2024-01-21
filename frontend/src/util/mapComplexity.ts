export const mapComplexity = (userAnswer: string) => {
  switch (userAnswer) {
    case "< 5 minutes":
      return "minimal"
    case "< 15 minutes":
      return "essential"
    case "< 30 minutes":
      return "balanced"
    case "> 30 minutes":
      return "extensive"
    default:
      return "NA"
  }
}

