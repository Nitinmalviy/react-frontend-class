import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/Navbar";

createRoot(document.getElementById("root")).render(
  <>
    <div className="">
      <Navbar />
      <App />
    </div>
  </>
);
