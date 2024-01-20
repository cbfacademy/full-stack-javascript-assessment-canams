import { useState } from "react"
import Button from "@mui/material/Button"
import "../styles/Home.css"
import SignUp from "./signIn/SignUp"
import SignIn from "./signIn/SignIn"

const Home = () => {
  const [openSignUp, setOpenSignUp] = useState(false)
  const [openSignIn, setOpenSignIn] = useState(false)

  return (
    <div className="home">
      <div className="content">
        <h1 className="title">
          CHI.<span className="skin">skin</span>
        </h1>
        <div className="buttons">
          <Button
            className="start-button"
            variant="outlined"
            size="large"
            sx={{ borderRadius: 0 }}
            onClick={() => setOpenSignUp(true)}
          >
            <span>Get Started</span>
          </Button>
          <Button
            onClick={() => setOpenSignIn(true)}
            variant="text"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Been here before? Log In here
          </Button>
        </div>
        <SignUp open={openSignUp} setOpen={setOpenSignUp} />
        <SignIn open={openSignIn} setOpen={setOpenSignIn} />
      </div>
    </div>
  )
}

export default Home

