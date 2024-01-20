export type AnswerType = "text" | "radio" | "dropdown" | "checkbox"

export type QuizItem = {
  question: string
  answerType: AnswerType
  answerOptions?: string[]
  limit?: boolean
}

