import React from "react";
import logo from "../../assets/logo.PNG";
import "./header.css";
export const Header = () => {
  return (
    <nav className="display-flex-row">
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
