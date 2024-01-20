import { useState } from "react"
import "../styles/NewUser.css"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import QuestionBuilder from "./QuestionBuilder"
import Button from "@mui/material/Button"
import { quiz } from "../data/quiz"
import Loading from "./Loading"

const steps = [
  "Your skin",
  "Your routine",
  "Your preferences",
  "Your lifestyle",
]

const NewUser = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleNext = () => {
    if (currentStep < quiz.length - 1) {
      setCurrentStep(currentStep + 1)
      return
    }
    setQuizComplete(true)
  }

  if (quizComplete) return <Loading />

  return (
    <div className="newUserPage">
      <h2 className="header">Let's create your routine...</h2>
      <div className="quizContainer">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 550,
              height: 370,
            },
          }}
        >
          <Paper className="paper">
            {quiz[currentStep].map((quizItem, i) => (
              <QuestionBuilder key={i} quizItem={quizItem} />
            ))}
            <div className="navButtons">
              {currentStep > 0 && (
                <Button
                  className="back"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </Button>
              )}
              <Button className="next" onClick={handleNext}>
                {currentStep === quiz.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </Paper>
        </Box>
      </div>
    </div>
  )
}

export default NewUser

