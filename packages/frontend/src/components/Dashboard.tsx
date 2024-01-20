import { useEffect, useState } from "react"
import { getUser } from "../services/UserService"
import { User } from "../types/User"
import NewUser from "./NewUser"

type DashboardProps = {
  isLoggedIn: boolean
}

const Dashboard = ({ isLoggedIn }: DashboardProps) => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser()
      const user = await data.json()

      setUser(user)
    }
    if (isLoggedIn) {
      fetchData().catch(console.error)
      setLoading(false)
    }
  }, [isLoggedIn])

  if (loading) return <div>Loading....</div>

  if (user?.skinProfile) {
    return <div>Returning user</div>
  }

  return <NewUser />
}

export default Dashboard

