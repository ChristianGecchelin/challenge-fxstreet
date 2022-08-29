import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/Context";
import dayjs from "dayjs";
import search from "../../assets/search.png";
import clock from "../../assets/clock.png";
import emptyHeart from "../../assets/emptyHeart.png";
import filledHeart from "../../assets/filledHeart.png";
import save from "../../assets/save.png";
import saved from "../../assets/saved.png";
import option from "../../assets/option.png";
import "./news.css";
export const Article = ({ news }) => {
  const { modal, setModal } = useContext(Context);
  const [screen, setScreen] = useState(false);
  const [articleLiked, setArticleLiked] = useState(false);
  const [articleSaved, setArticleSaved] = useState(false);

  let date = dayjs(news.publicationTime);
  let formatDate = date.format("MMM D");
  let formatHour = date.format("HH:mm");
  let { content } = news;

  let saveImageURL, likeImageURL, likeText, saveText;

  if (articleLiked === false) {
    likeImageURL = emptyHeart;
    likeText = "Like";
  } else {
    likeImageURL = filledHeart;
    likeText = "Liked!";
  }
  if (articleSaved === false) {
    saveImageURL = save;
    saveText = "Save";
  } else {
    saveImageURL = saved;
    saveText = "Saved!";
  }

  // Para que se mantenga cuando refresco el componente debería guardarlo como una propiedad del objeto en BD
  const handleSave = () => {
    setArticleSaved(!articleSaved);
  };
  const handleLike = () => {
    setArticleLiked(!articleLiked);
  };
  const handleModal = () => {
    setModal(!modal);
  };
  const handlerScreen = () => {
    if (window.screen.width > 1000) {
      setScreen(true);
      console.log("hola");
    }
  };
  useEffect(() => {
    handlerScreen();
    window.addEventListener("resize", handlerScreen);
  });
  console.log(screen);
  return (
    <div className="container-news">
      <div className="container-news-header">
        <div className="container-news-header-category display-flex-row">
          <div className="container-news-header-category__text-container">
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
          <div className="container-news-header-category__hour-container">
            <p className="container-news-header-category__text-hour">
              <span>
                <img src={clock} alt="clock" />
              </span>
              {`${formatDate}, ${formatHour}`}
            </p>
          </div>
        </div>
        {!screen ? (
          <div className="container-news-header-author">
            <div className="container-news-header-author-text">
              <p className="header-author-name__text">
                {news.author.name} | {news.author.companyName}
              </p>
            </div>
            <div className="container-news-header-author-title display-flex-row">
              <img src={news.author.imageUrl} alt="author" />
              <p className="header-author-name__subtitle ">{news.title}</p>
            </div>
          </div>
        ) : (
          <div className="container-news-header-author display-flex-row">
            <div className="container-news-header-author-title">
              <img src={news.author.imageUrl} alt="author" />
            </div>
            <div className="container-news-header-author-name">
              <p className="header-author-name__text">
                {news.author.name} | {news.author.companyName}
              </p>
              <p className="header-author-name__subtitle">{news.title}</p>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="container-news-report">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {news.imageUrl && <img src={news.imageUrl} alt="imageNews" />}
      </div>
      <div className="display-flex-row container-news-options">
        <div className="container-news-option">
          <img src={likeImageURL} onClick={handleLike} alt="emptyHeart" />
          <p className={articleLiked ? "red" : ""}>{likeText}</p>
        </div>
        <div className="container-news-option container-news-option__save">
          <img src={saveImageURL} onClick={handleSave} alt="save" />
          <p className={articleSaved ? "green" : ""}>{saveText}</p>
        </div>
        <div className="container-news-option container-news-option__more-options">
          <img onClick={handleModal} src={option} alt="options" />
        </div>
      </div>
    </div>
  );
};
