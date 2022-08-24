import React from "react";
import logo from "../../assets/logo.PNG";
import "Header.css";
export const Header = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      <div>
        <button></button>
        <button></button>
      </div>
    </nav>
  );
};
