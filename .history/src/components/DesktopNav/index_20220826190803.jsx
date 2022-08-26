import React from "react";
import "./desktopNav.css";
export const DesktopNav = () => {
  return (
    <div className="container-desktop-nav display-flex-row">
      <div>
        <button className="circulo"></button>
        <button className="rectangulo"></button>
      </div>
      <div>
        <button className="rectangulo"></button>
        <button className="circulo"></button>
        <button className="circulo"></button>
        <button className="circulo"></button>
      </div>
    </div>
  );
};
