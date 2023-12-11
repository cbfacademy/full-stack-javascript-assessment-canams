import Home from "./components/Home"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./styles/theme"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import "./styles/App.css"

function App() {
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

