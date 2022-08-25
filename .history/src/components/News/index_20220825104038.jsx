import { useContext } from "react";
import { Article } from "./Article";
import mockJSON from "../../API/mocked.json";
import { Context } from "../../context/Context";

export const News = () => {
  const { popular } = useContext(Context);
  const newsfiltered = mockJSON.filter((element) => {
    return element.isPopular === popular;
  });
  return (
    <div>
      {newsfiltered.map((news) => (
        <Article key={news.id} news={news} />
      ))}
    </div>
  );
};
