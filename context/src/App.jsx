import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Singup from "./components/auth/Singup"
import Login from "./components/auth/Login"
import { UserProvider } from "./context/UserContext"
import Profile from "./pages/Profile"

function App() {

  return (
    <>

      <UserProvider > <Navbar /></UserProvider >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={
          <UserProvider><Profile /></UserProvider>} />
        <Route path="/login" element={<UserProvider><Login /></UserProvider>} />
        <Route path="/sing-up" element={<Singup />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
