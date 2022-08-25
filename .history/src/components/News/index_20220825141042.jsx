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
    (a, b) => b.publicationTime - a.publicationTime
  );
  console.log(newsSortered);
  if (newsFiltered[0].publicationTime > newsFiltered[1].publicationTime) {
    console.log(true);
  } else {
    console.log(false);
  }
  return (
    <div>
      {newsSortered.map((news) => (
        <Article key={news.id} news={news} />
      ))}
    </div>
  );
};
