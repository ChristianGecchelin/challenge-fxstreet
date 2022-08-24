import React from "react";
import { Article } from "./Article";
import mockJSON from "../../API/mocked.json";

export const News = () => {
  return (
    <div>
      {mockJSON.map((news) => (
        <Article news={news} />
      ))}
    </div>
  );
};
