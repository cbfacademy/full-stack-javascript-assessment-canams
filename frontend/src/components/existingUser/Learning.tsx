import Box from "@mui/material/Box"
import MobileStepper from "@mui/material/MobileStepper"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import { useState } from "react"
import Modal from "@mui/material/Modal"

const topics = [
  {
    label: "Skincare Ingredients",
    description: (
      <p>
        Below are a list of some of the most common skincare ingredients and
        their uses. Be sure to look out for ingredients that address your
        concerns when building your routine.
        <ul>
          <li>
            <strong>Hyaluronic Acid:</strong> Hydrates and plumps the skin by
            attracting and retaining water.
          </li>
          <li>
            <strong>Niacinamide (Vitamin B3):</strong> Improves skin texture,
            reduces inflammation, and helps with hyperpigmentation.
          </li>
          <li>
            <strong>Retinol (Vitamin A):</strong> Promotes skin renewal, reduces
            fine lines, and improves skin tone.
          </li>
          <li>
            <strong>Vitamin C (Ascorbic Acid):</strong> A potent antioxidant
            that brightens the skin, boosts collagen production, and protects
            against free radicals.
          </li>
          <li>
            <strong>
              Alpha Hydroxy Acids (AHAs - e.g., Glycolic Acid, Lactic Acid):
            </strong>{" "}
            Exfoliate the skin, improve texture, and help with
            hyperpigmentation.
          </li>
        </ul>
      </p>
    ),
  },
  {
    label: "Starting new products",
    description: `Always patch test new products and introduce them gradually into your routine to monitor 
    how your skin reacts. It is not advisable to start multiple products at once, 
    as it is harder to track any results/reactions to a specific product. It's also advisable to consult with 
    a dermatologist for personalized recommendations based on your specific skin needs and concerns.`,
  },
]

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const Learning = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [open, setOpen] = useState(true)
  const maxSteps = topics.length

  const handleClose = () => setOpen(false)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  return (
    <div>
      <h3 className="header">Your Learning</h3>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="learning-info"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Welcome to your learning page
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Here, you can learn more about the world of skincare. The aim of
            this section is to equip you with the knowledge you need to master
            your personal skincare journey. It's a lot of information, but don't
            worry - it's not going anywhere (at least until the next scientific
            discovery!). Click through each of the topics at your own pace, and
            feel free to come back here any time. Watch out for new topics, the
            library is constantly growing!
          </Typography>
          <Button className="dismiss" onClick={handleClose}>
            Dismiss
          </Button>
        </Box>
      </Modal>
      <div className="learning-container">
        <Box sx={{ flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography variant="h6" className="info-header">
              {topics[activeStep].label}
            </Typography>
          </Paper>
          <Box sx={{ height: 255, width: "100%", p: 2 }} className="info-text">
            {topics[activeStep].description}
          </Box>
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </Box>
      </div>
    </div>
  )
}

export default Learning

