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
  const sortedDates = newsFiltered
    .map((obj) => {
      return { ...obj, date: new Date(obj.date) };
    })
    .sort((a, b) => b.date - a.date);
  const newsSortered = newsFiltered.sort(
    (a, b) => b.publicationTime - a.publicationTime
  );
  return (
    <div>
      {newsSortered.map((news) => (
        <Article key={news.id} news={news} />
      ))}
    </div>
  );
};
