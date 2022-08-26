import React from "react";
import "./desktopNav.css";
export const DesktopNav = () => {
  return (
    <div className="container-desktop-nav flex-direction-row">
      <div>
        <button className="circulo"></button>
        <button className="rectangulo"></button>
      </div>
      <div>LadoDerecho</div>
    </div>
  );
};