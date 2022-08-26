import React from "react";
import "./desktopNav.css";
export const DesktopNav = () => {
  return (
    <div className="container-desktop-nav display-flex-row">
      <div className="container-leftside-nav">
        <button className="circulo"></button>
        <button className="rectangulo"></button>
      </div>
      <div className="container-rightside-nav">
        <button className="rectangulo orange"></button>
        <button className="circulo border gray"></button>
        <button className="circulo border gray"></button>
        <div className="container-rightside-nav__2buttons">
          <button className="circulo gray"></button>
          <button className="rectangulo-gray"></button>
        </div>
      </div>
    </div>
  );
};
