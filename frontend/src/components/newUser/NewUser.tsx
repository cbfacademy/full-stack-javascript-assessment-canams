import { useState } from "react"
import "../../styles/NewUser.css"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import QuestionBuilder from "./QuestionBuilder"
import Button from "@mui/material/Button"
import { quiz } from "../../data/quiz"
import Loading from "./Loading"
import { updateUserProfile } from "../../services/RoutineService"
import { SkinProfile } from "../../types/SkinProfile"
import { mapComplexity } from "../../util/mapComplexity"

const steps = [
  "Your skin",
  "Your routine",
  "Your preferences",
  "Your lifestyle",
]

const NewUser = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const handleNext = async () => {
    if (currentStep < quiz.length - 1) {
      setCurrentStep(currentStep + 1)
      return
    }
    setQuizComplete(true)
    const userProfile: SkinProfile = {
      type: quiz[0][0].userAnswer[0].toLowerCase() as SkinProfile["type"],
      concerns:
        quiz[0][1].userAnswer[0].toLowerCase() as SkinProfile["concerns"],
      prevRoutine: quiz[1][0].userAnswer,
      complexity: mapComplexity(quiz[2][0].userAnswer[0]),
      budget: quiz[2][1].userAnswer[0].toLowerCase() as SkinProfile["budget"],
    }
    await updateUserProfile(userProfile)
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

