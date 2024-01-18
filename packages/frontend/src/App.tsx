import { useState } from "react"
import Home from "./components/Home"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./styles/theme"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import "./styles/App.css"
import auth from "./services/firebase"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  auth.auth.onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  })

  console.log(isLoggedIn)

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App

