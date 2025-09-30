import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/ui/Navbar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserContext } from "./context/userContext";

function App() {
  return (
    <UserContext.Consumer >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/profile" element={

          <Profile />} />
      </Routes>
    </UserContext.Consumer>
  );
}

export default App;
