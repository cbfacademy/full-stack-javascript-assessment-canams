import { useNavigate } from "react-router-dom"
import "../../styles/Loading.css"

const Loading = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate("/dashboard")
  }, 5000)
  return <div className="loading">Building routine...</div>
}

export default Loading

