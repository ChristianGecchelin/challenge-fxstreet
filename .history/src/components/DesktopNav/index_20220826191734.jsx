import React from "react";
import "./desktopNav.css";
export const DesktopNav = () => {
  return (
    <div className="container-desktop-nav display-flex-row">
      <div>
        <button className="circulo"></button>
        <hr className="vertical" />
        <button className="rectangulo"></button>
      </div>
      <div>
        <button className="rectangulo orange"></button>
        <li>
          <button className="circulo border gray"></button>
        </li>
        <button className="circulo border gray"></button>
        <button className="circulo gray"></button>
        <button className="rectangulo-gray"></button>
      </div>
    </div>
  );
};
