import { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Alert from "@mui/material/Alert"
import TextField from "@mui/material/TextField"
import { Button, FormControl, FormLabel } from "@mui/material"
import "../../styles/SignUp.css"
import { createUser } from "../../services/UserService"
import { useNavigate } from "react-router-dom"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "black",
  boxShadow: 24,
  p: 4,
}

type SignUpProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function SignUp({ open, setOpen }: SignUpProps) {
  const [email, setEmail] = useState<string>()
  const [name, setName] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (name && email && password) {
      try {
        const data = await createUser({
          name: name,
          email: email,
          password: password,
        })
        if (data.error) {
          setError(data.error)
        } else {
          navigate("/dashboard")
        }
      } catch (e) {
        setError(e as string)
      }
    }
  }

  return (
    <div id="modal-container">
      {error && (
        <Alert variant="filled" severity="error" className="error">
          {error}
        </Alert>
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="modal-background"
      >
        <Box sx={style} className="modal">
          <Typography id="modal-title" variant="h6" component="h2">
            Begin Your Skincare Journey
          </Typography>
          <FormControl className="form">
            <div className="inputs">
              <TextField
                required
                id="name"
                type="text"
                placeholder="Full Name"
                variant="standard"
                className="form-input"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                required
                id="email"
                type="email"
                placeholder="Email"
                variant="standard"
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                id="password"
                variant="standard"
                type="password"
                placeholder="Password"
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" onClick={handleSubmit} className="signup-btn">
              Sign Up
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  )
}

