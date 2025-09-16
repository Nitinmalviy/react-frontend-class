import React, { useState } from "react";

export default function Navbar() {
  let [menu, setMenu] = useState(["Home", "About"]);
  console.log(menu);

  return (
    <div className="h-[90px] bg-white w-screen">
      <ul>
        {menu.map((iteam, index) => {
          return <li>{iteam}</li>;
        })}
      </ul>
    </div>
  );
}
