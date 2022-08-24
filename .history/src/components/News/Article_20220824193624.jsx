import React from "react";

export const Article = ({ news }) => {
  console.log(news);
  return (
    <div className="container-news">
      <div className="container-news-header">
        <div className="container-news-header-category display-flex-row">
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
          <div>
            <p className="container-news-header-category__text-hour">
              <span>
                <img src={clock} alt="clock" />
              </span>
              {`${formatDate},${formatHour}`}
            </p>
          </div>
        </div>
        <div className="container-news-header-author">
          <div className="container-news-header-author-name">
            <p>
              {news.author.name} | {news.author.companyName}
            </p>
          </div>
          <div className="container-news-header-author-title display-flex-row">
            <img src={news.author.imageUrl} alt="author" />
            <p>{news.title}</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-news-report">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {news.imageUrl && <img src={news.imageUrl} alt="imageNews" />}
      </div>
      <div className="display-flex-row container-news-options">
        <div className="container-news-option">
          <img src={emptyHeart} alt="emptyHeart" />
          <p>Like</p>
        </div>
        <div className="container-news-option">
          <img src={save} alt="save" />
          <p>Save</p>
        </div>
        <div className="container-news-option">
          <img src={option} alt="options" />
        </div>
      </div>
    </div>
  );
};
