import { AnswerType, QuizItem } from "../types/QuizTypes"

const skinQuestuions: QuizItem[] = [
  {
    question: "What is your current skin type?",
    answerType: "radio" as AnswerType,
    answerOptions: ["Oily", "Dry", "Normal", "Combination", "Sensitive"],
  },
  {
    question: "What are your current skin concerns?",
    answerType: "checkbox" as AnswerType,
    answerOptions: [
      "Acne",
      "Fine Lines/Wrinkles",
      //   "Eczema*",
      "Hyperpigmentation",
      //   "Enlarged Pores*",
      "Dehydration",
      "Dark Circles",
      //   "Rosacea*",
      //   "Scarring*",
      //   "Psoriasis*",
    ],
    limit: true,
  },
]
const routineQuestuions: QuizItem[] = [
  {
    question: "Which of the following steps are currently in your routine?",
    answerType: "checkbox" as AnswerType,
    answerOptions: ["Cleanse", "Tone", "Hydrate", "Treat", "Sun protection"],
    limit: false,
  },
]
const preferencesQuestions: QuizItem[] = [
  {
    question:
      "How much time are you willing to dedicate to your skincare routine each day?",
    answerType: "radio" as AnswerType,
    answerOptions: [
      "< 5 minutes",
      "< 15 minutes",
      "< 30 minutes",
      "> 30 minutes",
      "I don't mind/it varies",
    ],
  },
  {
    question: "What is your budget for skincare products?",
    answerType: "radio" as AnswerType,
    answerOptions: ["Basic", "Mid-range", "Luxury"],
  },
]
const lifestyleQuestuions: QuizItem[] = [
  {
    question:
      "Do you have specific lifestyle factors that might impact your skin?",
    answerType: "checkbox" as AnswerType,
    answerOptions: [
      "Increased sun exposure",
      "High pollution",
      "Stress",
      "Hormonal imbalance",
    ],
    limit: false,
  },
]

export const quiz = [
  skinQuestuions,
  routineQuestuions,
  preferencesQuestions,
  lifestyleQuestuions,
]
