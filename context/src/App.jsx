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
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <UserProvider>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sing-up" element={<Singup />} />
        </Routes >
        <Footer />
      </UserProvider >

    </>
  )
}

export default App
