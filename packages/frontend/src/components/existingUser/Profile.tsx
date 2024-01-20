import Button from "@mui/material/Button"
import { User } from "../../types/User"

type ProfileProps = {
  user: User
}
const Profile = ({ user }: ProfileProps) => {
  return (
    <div>
      <h3 className="header">Your Skin Profile</h3>
      <ul>
        <li>Skin type: {user.skinProfile?.type}</li>
        <li>Concerns: {user.skinProfile?.concerns}</li>
        <li>Budget: {user.skinProfile?.budget}</li>
        <li>Complexity: {user.skinProfile?.complexity}</li>
      </ul>
      <Button variant="outlined" disabled>
        Retake Quiz
      </Button>
    </div>
  )
}

export default Profile

