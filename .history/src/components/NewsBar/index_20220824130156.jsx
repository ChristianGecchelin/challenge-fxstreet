import React from "react";
import "./newsBar.css";
export const NewsBar = () => {
  return (
    <div className="display-flex-row container-newsBar">
      <div className="display-flex-row container-newsBar-buttons">
        <button className="container-newsBar-buttons__button">Latest</button>
        <button className="container-newsBar-buttons__button">Popular</button>
      </div>
      <div>icono</div>
    </div>
  );
};