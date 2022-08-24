import React from "react";
import dayjs from "dayjs";
import mockJSON from "../../API/mocked.json";
import search from "../../assets/search.png";
import clock from "../../assets/clock.png";
import emptyHeart from "../../assets/emptyHeart.png";
import filledHeart from "../../assets/filledHeart.png";
import save from "../../assets/save.png";
import saved from "../../assets/saved.png";
import option from "../../assets/option.png";
import "./news.css";

export const News = () => {
  console.log(mockJSON);

  const news = {
    id: "2cb26098-e701-4dd9-bcd2-2c090941aa91",
    title:
      "Forex Today: Dollar attempts recovery after Fed, data blows, gold clings to $1,900, cryptos climb",
    content:
      "<p>Hi traders! On Monday we informed our users about a connectivity issue between our servers and those from our automation provider. As a result of that incident, there are <strong>still 5 open trades some of which could see delays in sending out the exit signals</strong>. The trades will be correctly closed at the indicated Stop Loss and Take Profit levels, but some of them require a <strong>manual intervention to send out the signal to the FXS Insights message feed</strong>.&nbsp;</p>",
    imageUrl: "",
    publicationTime: "2021-05-24T11:02:43.511Z",
    isPopular: true,
    feed: "Analysis",
    subFeed: "Reviews & Stats",
    author: {
      id: 1,
      name: "FXStreet Team",
      companyName: "FXStreet",
      imageUrl:
        "https://editorial.fxstreet.com/authors/FXStreet%20Company%20LOGO%2075%20MAY17_XtraSmall.png",
    },
  };
  let date = dayjs(news.publicationTime);
  let formatDate = date.format("MMM D");
  let formatHour = date.format("HH:mm");
  let content = news.content;

  return <div>{mockJSON.map((news) => console.log(news))}</div>;
};
