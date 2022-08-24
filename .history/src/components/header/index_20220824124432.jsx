import React from "react";
import logo from "../../assets/logo.PNG";
import "./header.css";
export const Header = () => {
  return (
    <nav className="display-flex-row">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      <div className="display-flex-row button-container">
        <button className="button-container__button button-container__button--circle"></button>
        <button className="button-container__button button-container__button--circle"></button>
      </div>
    </nav>
  );
};
