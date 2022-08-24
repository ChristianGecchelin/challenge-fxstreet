import React from "react";
import logo from "../../assets/logo.PNG";
import "./header.css";
export const Header = () => {
  return (
    <nav>
      <a href="/" className="display-flex-row">
        <img src={logo} alt="logo" />
      </a>

      <div>
        <button></button>
        <button></button>
      </div>
    </nav>
  );
};
