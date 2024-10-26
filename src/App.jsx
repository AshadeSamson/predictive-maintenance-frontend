import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Homepage from "./pages/homepage"
import Login from "./pages/login"
import Dashboard from "./pages/dashboard.jsx"
import Protected from "./pages/protected"
import CustomersMap from "./pages/customersMap"
import SignUp from "./pages/signUp"
import Error from "./pages/error"
import About from "./pages/about"
import GlobalStyles from "./styles/globals"
import { ThemeProvider } from "styled-components"
import Layout from "./pages/layout"
import Home from "./pages/home"
import MachineInfo from "./pages/machineInfo"
import { theme } from "./styles/theme"
import MachineOverview from "./pages/machineOverview.jsx"
import Notifications from "./pages/notifications.jsx"



function App() {
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={ theme }>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="map" element={<CustomersMap/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<Error/>} />
        </Route>
        <Route element={<Protected/>}>
          <Route path="dashboard" element={<Dashboard/>}>
            <Route index element={<Home/>} />
            <Route path="machines" element={<MachineOverview />} />
            <Route path="machines/:id" element={<MachineInfo/>} />
            <Route path="notifications" element={<Notifications/>} />
            <Route path="*" element={<Error/>} />
          </Route>
        </Route>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
