import { Button } from "@mui/material"
import Paper from "@mui/material/Paper"

type RoutineProps = {
  changeTab: (value: number) => void
}
const Routine = ({ changeTab }: RoutineProps) => {
  const weekRoutine = [
    { day: "Monday" },
    { day: "Tuesday" },
    { day: "Wednesday" },
    { day: "Thursday" },
    { day: "Friday" },
    { day: "Saturday" },
    { day: "Sunday" },
  ]

  const treatments = [
    { frequency: "monthly", activity: "facial" },
    { frequency: "quarterly", activity: "other facial" },
  ]

  return (
    <div>
      <h2 className="header">Your Custom Routine</h2>
      <div>
        <h3>Weekly</h3>
        <div className="routine-container">
          {weekRoutine.map((dailyRoutine) => (
            <Paper className="day-routine">{dailyRoutine.day}</Paper>
          ))}
        </div>
      </div>
      <div className="button-container">
        <Button
          variant="contained"
          className="day-button"
          onClick={() => changeTab(1)}
        >
          Go to Day View
        </Button>
      </div>

      <div>
        <h3>Regular Treatments</h3>
        <div className="treatment-container">
          {treatments.length > 0 ? (
            <ul>
              {treatments.map((treatment) => (
                <li className="treatment-item">
                  {treatment.activity} - {treatment.frequency}
                </li>
              ))}
            </ul>
          ) : (
            "No regular treatments"
          )}
        </div>
      </div>
    </div>
  )
}

export default Routine

