import { useEffect, useState } from "react"
import { getUser } from "../services/UserService"
import { User } from "../types/User"
import ExistingUser from "./existingUser/ExistingUser"
import { useNavigate } from "react-router-dom"

type DashboardProps = {
  isLoggedIn: boolean
}

const Dashboard = ({ isLoggedIn }: DashboardProps) => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

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

  useEffect(() => {
    if (!loading && user) {
      if (!user.skinProfile) navigate("/new-user")
    }
  }, [loading, user])

  if (loading || user === undefined) return <div>Loading....</div>

  return <ExistingUser user={user} />
}

export default Dashboard

