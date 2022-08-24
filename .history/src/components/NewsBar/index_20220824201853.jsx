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
  return (
    <div className="display-flex-row container-newsBar">
      <div className="display-flex-row container-newsBar-buttons">
        {latest ? (
          <button
            className="container-newsBar-buttons__button"
            onClick={handleLatestButton()}
            style={{ color: "#e4871b" }}
          >
            Latest
          </button>
        ) : (
          <button
            className="container-newsBar-buttons__button"
            onClick={handleLatestButton()}
            style={{ color: "#8C8D91" }}
          >
            Latest
          </button>
        )}

        <button className="container-newsBar-buttons__button">Popular</button>
      </div>
      <img className="container-newsBar__img " src={filter} alt="filter" />
    </div>
  );
};
