import { useEffect, useState } from "react"
import { getUser } from "../services/UserService"
import { User } from "../types/User"

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
      console.log(user)
      setUser(user)
    }
    if (isLoggedIn) {
      fetchData().catch(console.error)
      setLoading(false)
    }
  }, [isLoggedIn])

  if (loading) return <div>Loading....</div>

  return <div>{user?.name}'s Dashboard</div>
}

export default Dashboard

