import Checkbox from "@mui/material/Checkbox"
import Paper from "@mui/material/Paper"
import CircleCheckedFilled from "@mui/icons-material/CheckCircle"
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked"
import FormControlLabel from "@mui/material/FormControlLabel"
import Tooltip from "@mui/material/Tooltip"
import "../../styles/ExistingUser.css"
import { User } from "../../types/User"

type PlanProps = {
  user: User
}
const Plan = ({ user }: PlanProps) => {
  return (
    <div>
      <h3 className="header">Today's View</h3>
      <div className="plan-container">
        <div className="plan-item-container">
          <Paper className="plan-item-card">
            <p className="plan-item-label">Morning</p>
            <ul className="step-container">
              <FormControlLabel
                control={<Checkbox className="step" />}
                label="Cleanse"
              />
              {user.skinProfile?.complexity !== "minimal" &&
                user.skinProfile?.complexity !== "essential" && (
                  <FormControlLabel
                    control={<Checkbox className="step" />}
                    label="Tone"
                  />
                )}
              {user.skinProfile?.complexity === "extensive" ||
                (user.skinProfile?.complexity === "NA" && (
                  <FormControlLabel
                    control={<Checkbox className="step" />}
                    label="Serum"
                  />
                ))}
              {user.skinProfile?.complexity !== "minimal" && (
                <FormControlLabel
                  control={<Checkbox className="step" />}
                  label="Moisturise"
                />
              )}
              <FormControlLabel
                control={<Checkbox className="step" />}
                label="Sun protection"
              />
            </ul>
          </Paper>
          <Tooltip title="Watch out for progress tracking in version 2!">
            <FormControlLabel
              control={
                <Checkbox
                  name="Mark as Done"
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                  className="plan-done"
                  disabled
                />
              }
              label="Mark as Done"
            />
          </Tooltip>
        </div>
        <div className="plan-item-container">
          <Paper className="plan-item-card">
            <p className="plan-item-label">Evening</p>
            <ul className="step-container">
              <FormControlLabel
                control={<Checkbox className="step" />}
                label="Cleanse"
              />
              {user.skinProfile?.complexity !== "minimal" &&
                user.skinProfile?.complexity !== "essential" && (
                  <FormControlLabel
                    control={<Checkbox className="step" />}
                    label="Tone"
                  />
                )}
              {user.skinProfile?.complexity === "extensive" ||
                (user.skinProfile?.complexity === "NA" && (
                  <FormControlLabel
                    control={<Checkbox className="step" />}
                    label="Serum"
                  />
                ))}
              {user.skinProfile?.complexity !== "minimal" &&
                user.skinProfile?.complexity !== "essential" && (
                  <FormControlLabel
                    control={<Checkbox className="step" />}
                    label="Treat"
                  />
                )}
              <FormControlLabel
                control={<Checkbox className="step" />}
                label="Moisturise"
              />
            </ul>
          </Paper>
          <Tooltip title="Watch out for progress tracking in version 2!">
            <FormControlLabel
              control={
                <Checkbox
                  name="Mark as Done"
                  icon={<CircleUnchecked />}
                  checkedIcon={<CircleCheckedFilled />}
                  className="plan-done"
                  disabled
                />
              }
              label="Mark as Done"
            />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default Plan

