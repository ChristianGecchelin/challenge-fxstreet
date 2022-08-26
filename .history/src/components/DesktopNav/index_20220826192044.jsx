import React from "react";
import "./desktopNav.css";
export const DesktopNav = () => {
  return (
    <div className="container-desktop-nav display-flex-row">
      <div className="container-leftside-nav">
        <button className="circulo"></button>
        <button className="rectangulo"></button>
      </div>
      <div>
        <button className="rectangulo orange"></button>
        <button className="circulo border gray"></button>
        <button className="circulo border gray"></button>
        <button className="circulo gray"></button>
        <button className="rectangulo-gray"></button>
      </div>
    </div>
  );
};
