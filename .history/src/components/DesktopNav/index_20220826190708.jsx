import React from "react";
import "./desktopNav.css";
export const DesktopNav = () => {
  return (
    <div className="container-desktop-nav display-flex-row">
      <div style={{ width: "30%" }}>
        <button className="circulo"></button>
        <button className="rectangulo"></button>
      </div>
      <div>LadoDerecho</div>
    </div>
  );
};
