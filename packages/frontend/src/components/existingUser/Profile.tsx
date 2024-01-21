import Button from "@mui/material/Button"
import Chip from "@mui/material/Chip"
import Paper from "@mui/material/Paper"
import { User } from "../../types/User"

type ProfileProps = {
  user: User
}
const Profile = ({ user }: ProfileProps) => {
  return (
    <div>
      <h3 className="header">Your Skin Profile</h3>
      <div className="profile-container">
        <Paper className="profile">
          {/* <ul> */}
          <p>
            Skin type: <Chip label={user.skinProfile?.type} />
          </p>
          <p>
            Concerns: <Chip label={user.skinProfile?.concerns} />
          </p>
          <p>
            Budget: <Chip label={user.skinProfile?.budget} />
          </p>
          <p>
            Complexity: <Chip label={user.skinProfile?.complexity} />
          </p>
          {/* </ul> */}
        </Paper>

        <Button variant="outlined" className="retake-btn" disabled>
          Retake Quiz
        </Button>
      </div>
    </div>
  )
}

export default Profile

