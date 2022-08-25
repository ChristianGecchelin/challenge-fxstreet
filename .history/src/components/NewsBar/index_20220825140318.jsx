import { useContext } from "react";
import { Context } from "../../context/Context";
import filter from "../../assets/filter.png";
import "./newsBar.css";
export const NewsBar = () => {
  const { setLatest, latest, setPopular, popular } = useContext(Context);

  const handleLatestButton = () => {
    setLatest(true);
    setPopular(false);
  };
  const handlePopularButton = () => {
    setLatest(false);
    setPopular(true);
  };
  return (
    <div className="display-flex-row container-newsBar">
      <div className="display-flex-row container-newsBar-buttons">
        {latest ? (
          <button
            className="container-newsBar-buttons__button"
            onClick={() => handleLatestButton()}
            style={{ color: "#e4871b" }}
          >
            Latest
          </button>
        ) : (
          <button
            className="container-newsBar-buttons__button"
            onClick={() => handleLatestButton()}
            style={{ color: "#8C8D91" }}
          >
            Latest
          </button>
        )}
        {popular ? (
          <button
            className="container-newsBar-buttons__button"
            onClick={() => handlePopularButton()}
            style={{ color: "#e4871b" }}
          >
            Popular
          </button>
        ) : (
          <button
            className="container-newsBar-buttons__button"
            onClick={() => handlePopularButton()}
            style={{ color: "#8C8D91" }}
          >
            Popular
          </button>
        )}
      </div>
      {window.screen.width > 1000 ? (
        <div className="display-flex-row container-filter">
          <p>Show:</p>
          <button>All</button>
        </div>
      ) : (
        <img className="container-newsBar__img " src={filter} alt="filter" />
      )}
    </div>
  );
};
