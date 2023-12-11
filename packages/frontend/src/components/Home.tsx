import Button from "@mui/material/Button"
import "../styles/Home.css"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
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
            onClick={() => navigate("/get-started")}
          >
            <span>Get Started</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home

