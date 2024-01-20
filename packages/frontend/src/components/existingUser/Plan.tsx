import Checkbox from "@mui/material/Checkbox"
import Paper from "@mui/material/Paper"
import CircleCheckedFilled from "@mui/icons-material/CheckCircle"
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked"
import FormControlLabel from "@mui/material/FormControlLabel"
import Tooltip from "@mui/material/Tooltip"

const Plan = () => {
  return (
    <div className="plan-page">
      <h2 className="header">Today's View</h2>
      <div className="plan-container">
        <div className="plan-item-container">
          <Paper className="plan-item-card">Morning</Paper>
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
        </div>
        <div className="plan-item-container">
          <Paper className="plan-item-card">Evening</Paper>
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

