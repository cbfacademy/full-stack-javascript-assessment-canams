import { Button } from "@mui/material"
import Paper from "@mui/material/Paper"
import { useEffect } from "react"
import { getUserRoutine } from "../../services/RoutineService"
import { User } from "../../types/User"

type RoutineProps = {
  changeTab: (value: number) => void
  user: User
}
const Routine = ({ changeTab, user }: RoutineProps) => {
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

  useEffect(() => {
    const fetchData = async () => {
      if (user.skinProfile) {
        const routine = await getUserRoutine(
          user.skinProfile.type,
          user.skinProfile.concerns
        )

        console.log(routine)
      }
    }
    fetchData()
    // if (isLoggedIn) {
    //   fetchData().catch(console.error)
    //   setLoading(false)
    // }
  }, [])

  return (
    <div>
      <h2 className="header">Your Custom Routine</h2>
      <div>
        <h3>Weekly</h3>
        <div className="routine-container">
          {weekRoutine.map((dailyRoutine, i) => (
            <Paper key={i} className="day-routine">
              {dailyRoutine.day}
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
          Go to Day View
        </Button>
      </div>

      <div>
        <h3>Regular Treatments</h3>
        <div className="treatment-container">
          {treatments.length > 0 ? (
            <ul>
              {treatments.map((treatment, i) => (
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

