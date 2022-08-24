import React from "react";
import "./newsBar.css";
export const NewsBar = () => {
  return (
    <div className="display-flex-row container-newsBar">
      <div className="display-flex-row container-newsBar-buttons">
        <button>Latest</button>
        <button>Popular</button>
      </div>
      <div>icono</div>
    </div>
  );
};
