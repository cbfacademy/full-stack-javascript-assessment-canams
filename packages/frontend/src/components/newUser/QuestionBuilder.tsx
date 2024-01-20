import { useEffect, useState } from "react"
import TextField from "@mui/material/TextField"
import ToggleButton from "@mui/material/ToggleButton"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import FormLabel from "@mui/material/FormLabel"
import FormControl from "@mui/material/FormControl"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { QuizItem } from "../../types/QuizTypes"
import "../../styles/QuestionBuilder.css"

type QuestionBuilderProps = {
  quizItem: QuizItem
}
const QuestionBuilder = ({ quizItem }: QuestionBuilderProps) => {
  const [answer, setAnswer] = useState<string>()
  const [multiAnswer, setMultiAnswer] = useState<string[]>([])
  const [error, setError] = useState(false)
  const { question, answerType, answerOptions, limit } = quizItem

  useEffect(() => {
    if (quizItem.userAnswer.length > 0) {
      quizItem.userAnswer = []
    }
    if (answer) quizItem.userAnswer.push(answer)
  }, [answer])

  useEffect(() => {
    if (quizItem.userAnswer.length > 0) {
      quizItem.userAnswer = []
    }
    if (multiAnswer.length > 0) quizItem.userAnswer = multiAnswer
  }, [multiAnswer])

  let answerInput
  switch (answerType) {
    case "text":
      answerInput = (
        <TextField
          required
          id="answer"
          type="text"
          variant="standard"
          onChange={(e) => setAnswer(e.target.value)}
        ></TextField>
      )
      break
    case "radio":
      if (!answerOptions) {
        console.error("No options were provided for the question: " + question)
        break
      }
      answerInput = (
        <ToggleButtonGroup
          color="primary"
          value={answer}
          exclusive
          onChange={(_, value) => setAnswer(value)}
          aria-label={question}
        >
          {answerOptions.map((option, i) => (
            <ToggleButton key={i} value={option}>
              {option}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      )
      break
    case "checkbox":
      if (!answerOptions) {
        console.error("No options were provided for the question: " + question)
        break
      }
      const handleChange = (value: string, checked: boolean) => {
        if (checked && !multiAnswer.includes(value)) {
          if (limit && multiAnswer.length >= 3) {
            setError(true)
          } else {
            setMultiAnswer([...multiAnswer, value])
            setError(false)
          }
          return
        }
        if (!checked && multiAnswer.includes(value)) {
          setMultiAnswer(multiAnswer.filter((answer) => answer !== value))
          return
        }
      }
      answerInput = (
        <FormControl
          required
          error={error}
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
          className="checkboxesContainer"
        >
          {limit && (
            <FormLabel component="legend" className="checkboxeHelper">
              Pick up to 3
            </FormLabel>
          )}
          <FormGroup className="checkboxes">
            {answerOptions.map((answer, i) => (
              <FormControlLabel
                key={i}
                control={
                  <Checkbox
                    checked={multiAnswer.includes(answer)}
                    disabled={answer.includes("*")}
                    onChange={(event, checked) =>
                      handleChange(event.target.name, checked)
                    }
                    name={answer}
                  />
                }
                label={answer}
              />
            ))}
          </FormGroup>
        </FormControl>
      )
      break
    default:
      break
  }
  return (
    <div className="questionItem">
      <p className="question">{question}</p>
      <div className="answer">{answerInput}</div>
    </div>
  )
}

export default QuestionBuilder

