import React from "react";
import search from "../../assets/search.png";
import "./news.css";
export const News = () => {
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
  return (
    <div className="container-news">
      <div className="container-news-header">
        <div className="container-news-header-category">
          <div>
            <p className="container-news-header-category__text">
              <span>
                <img src={search} alt="search" />
              </span>
              {news.feed}
            </p>
            <h3 className="container-news-header-category__subtitle">
              {news.subFeed}
            </h3>
          </div>
          <div>Time</div>
        </div>
        <div>Title</div>
      </div>
      <div className="container-news-report">
        <p>Noticia</p>
        <img src="" alt="" />
      </div>
      <div className="display-flex-row container-news-options">
        <div>Like</div>
        <div>Save</div>
        <div>More Options</div>
      </div>
    </div>
  );
};
