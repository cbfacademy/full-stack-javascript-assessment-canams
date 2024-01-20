import { useState } from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import "../../styles/ExistingUser.css"
import Typography from "@mui/material/Typography"
import Routine from "./Routine"
import Plan from "./Plan"
import Progress from "./Progress"
import { User } from "../../types/User"

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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const ExistingUser = ({ user }: ExistingUserProps) => {
  const [value, setValue] = useState(0)
  const handleChange = (newValue: number) => {
    setValue(newValue)
  }
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    }
  }

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
            <Tab label="Plan" {...a11yProps(1)} />
            <Tab label="Progress" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Routine changeTab={handleChange} user={user} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Plan />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Progress />
        </CustomTabPanel>
      </Box>
    </div>
  )
}

export default ExistingUser

