import { useContext } from "react";
import { Article } from "./Article";
import mockJSON from "../../API/mocked.json";
import { Context } from "../../context/Context";

export const News = () => {
  const { popular } = useContext(Context);
  const newsFiltered = mockJSON.filter((element) => {
    return element.isPopular === popular;
  });
  console.log(newsFiltered);
  const newsSortered = newsFiltered.sort(
    (a, b) => a.publicationTime - b.publicationTime
  );
  console.log(newsSortered);
  return (
    <div>
      {newsFiltered.map((news) => (
        <Article key={news.id} news={news} />
      ))}
    </div>
  );
};
