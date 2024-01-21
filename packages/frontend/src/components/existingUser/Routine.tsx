import { Button } from "@mui/material"
import Paper from "@mui/material/Paper"
import { RoutineType } from "../../types/Routine"

type RoutineProps = {
  changeTab: (value: number) => void
  routine: RoutineType
}
const Routine = ({ changeTab, routine }: RoutineProps) => {
  const weekRoutine = [
    { day: "Monday" },
    { day: "Tuesday" },
    { day: "Wednesday" },
    { day: "Thursday" },
    { day: "Friday" },
    { day: "Saturday" },
    { day: "Sunday" },
  ]

  if (!routine) return <>"Loading..."</>

  return (
    <div className="routine-page">
      <h3 className="header">Your Custom Routine</h3>
      <div>
        <h4>Weekly</h4>
        <div className="routine-container">
          {weekRoutine.map((dailyRoutine, i) => (
            <Paper key={i} className="day-routine">
              <h5>{dailyRoutine.day}</h5>
              <p>Today's Focus:</p>
              <p>{routine.focus[i % 2]}</p>
            </Paper>
          ))}
        </div>
      </div>
      <div className="button-container">
        <Button
          variant="contained"
          className="day-button"
          onClick={() => changeTab(1)}
        >
          View Today
        </Button>
      </div>

      <div>
        <h4>Regular Treatments</h4>
        <div className="treatment-container">
          {routine.treatments.length > 0 ? (
            <ul>
              {routine.treatments.map((treatment, i) => (
                <li key={i} className="treatment-item">
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

