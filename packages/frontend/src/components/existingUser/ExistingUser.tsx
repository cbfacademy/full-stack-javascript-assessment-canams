import { useEffect, useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import "../../styles/ExistingUser.css"
import Typography from "@mui/material/Typography"
import Routine from "./Routine"
import Plan from "./Plan"
import Progress from "./Progress"
import { User } from "../../types/User"
import { getUserRoutine } from "../../services/RoutineService"
import Learning from "./Learning"
import Profile from "./Profile"

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
}

type ExistingUserProps = {
  user: User
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      className="tab"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="h6">{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const ExistingUser = ({ user }: ExistingUserProps) => {
  const [value, setValue] = useState(0)
  const [routine, setRoutine] = useState()
  const handleChange = (newValue: number) => {
    setValue(newValue)
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    }
  }

  useEffect(() => {
    const fetchRoutine = async () => {
      if (user.skinProfile) {
        const data = await getUserRoutine(
          user.skinProfile.type,
          user.skinProfile.concerns
        )
        setRoutine(data.routine)
      }
    }
    fetchRoutine()
  }, [])

  if (!user.skinProfile || !routine) return <>Loading...</>

  return (
    <div className="dashboard-page">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={(_event, value) => handleChange(value)}
            aria-label="basic tabs example"
          >
            <Tab label="Routine" {...a11yProps(0)} />
            <Tab label="Today" {...a11yProps(1)} />
            <Tab label="Progress" {...a11yProps(2)} />
            <Tab label="Profile" {...a11yProps(3)} />
            <Tab label="Learning" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Routine changeTab={handleChange} routine={routine} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Plan user={user} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Progress />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Profile user={user} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Learning />
        </CustomTabPanel>
      </Box>
    </div>
  )
}

export default ExistingUser

