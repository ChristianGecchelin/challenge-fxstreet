import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.PNG";
import "./header.css";
export const Header = () => {
  return (
    <nav className="display-flex-row">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>

      <div className="display-flex-row button-container">
        <FontAwesomeIcon icon="far fa-circle" />
        <button className="button-container__button"></button>
      </div>
    </nav>
  );
};
