import { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import Alert from "@mui/material/Alert"
import TextField from "@mui/material/TextField"
import { Button, FormControl, FormLabel } from "@mui/material"
import "../../styles/SignIn.css"
import { signIn } from "../../services/firebase"
import { useNavigate } from "react-router-dom"

type SignInProps = {
  open: boolean
  setOpen: (open: boolean) => void
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

export default function SignIn({ open, setOpen }: SignInProps) {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signIn(email, password)
        navigate("/dashboard")
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
            Sign In
          </Typography>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <TextField
              required
              id="email"
              type="email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel htmlFor="password">Password</FormLabel>
            <TextField
              required
              id="password"
              variant="standard"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={handleSubmit}>
              Sign In
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  )
}

