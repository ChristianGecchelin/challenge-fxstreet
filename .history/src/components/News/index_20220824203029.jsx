import React from "react";
import { Article } from "./Article";
import mockJSON from "../../API/mocked.json";

export const News = () => {
  const newsfiltered = mockJSON.filter((element) => {
    return element.isPopular;
  });
  return (
    <div>
      {mockJSON.map((news) => (
        <Article key={news.id} news={news} />
      ))}
    </div>
  );
};
