import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Navbar from "./components/ui/Navbar"
import Login from "./components/Login"


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
