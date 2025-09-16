import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

export default function App() {
  //  3  mounting , updating , unmounting

  let [user, setUser] = useState({});
  let [products, setProducts] = useState([]);

  function getUserData() {
    setUser({
      username: "abcd",
      age: "23",
      email: "xyz@gmail.com",
    });
  }

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="bg-amber-400 w-screen h-screen grid place-content-center">
      <h4 className="text-white text-3xl font-bold">{user?.username}</h4>
      <h4 className="text-white text-3xl font-bold">{user?.email}</h4>
      <h4 className="text-white text-3xl font-bold">{user?.age}</h4>
    </div>
  );
}
