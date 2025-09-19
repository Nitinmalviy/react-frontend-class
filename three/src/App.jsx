import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Insides from "./Pages/Insides";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./Pages/auth/Register";
import Login from "./Pages/auth/Login";
import PageNotFound from "./components/PageNotFound";
import CaseStudy from "./components/CaseStudy";
import Blog from "./components/Blog";


function App() {
  const location = useLocation()
  let isVisible = false;
  isVisible = ["/login", "/register", "/*"].includes(location.pathname)

  return (
    <>
      <div>
        {!isVisible && <Navbar />}
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/insides" element={<Insides />} >
              <Route index element={<CaseStudy />} />
              <Route path="blog" element={<Blog />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
        {!isVisible && <Footer />}
      </div>
    </>
  );
}

export default App;
