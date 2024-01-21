import { Button } from "@mui/material"
import Paper from "@mui/material/Paper"
import { RoutineType } from "../../types/Routine"
import { User } from "../../types/User"

type RoutineProps = {
  changeTab: (value: number) => void
  routine: RoutineType
  user: User
}
const Routine = ({ changeTab, routine, user }: RoutineProps) => {
  const weekRoutine = [
    { day: "Monday" },
    { day: "Tuesday" },
    { day: "Wednesday" },
    { day: "Thursday" },
    { day: "Friday" },
    { day: "Saturday" },
    { day: "Sunday" },
  ]

  if (!routine || !user) return <>"Loading..."</>

  const showTreatments =
    user.skinProfile?.complexity === "extensive" &&
    routine.treatments.length > 0 &&
    user.skinProfile.budget === "luxury"

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
          {showTreatments ? (
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

