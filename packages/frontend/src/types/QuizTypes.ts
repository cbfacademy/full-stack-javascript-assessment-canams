export type AnswerType = "text" | "radio" | "dropdown" | "checkbox"

export type QuizItem = {
  question: string
  answerType: AnswerType
  userAnswer: string[]
  answerOptions?: string[]
  limit?: boolean
}

