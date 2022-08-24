import React from "react";
import { Article } from "./Article";
import mockJSON from "../../API/mocked.json";

export const News = () => {
  mockJSON.filter((element)=>{return element.})
  return (
    <div>
      {mockJSON.map((news) => (
        <Article key={news.id} news={news} />
      ))}
    </div>
  );
};
