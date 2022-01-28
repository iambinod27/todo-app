import React from "react";
import sun from "../images/icon-sun.svg";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">TODO</div>
        <img src={sun} alt="" />
      </div>
    </header>
  );
}

export default Header;
