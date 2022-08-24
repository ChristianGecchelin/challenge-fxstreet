import { useContext } from "react";
import filter from "../../assets/filter.png";
import "./newsBar.css";
export const NewsBar = () => {
  const { user } = useContext(Context);
  const handleLatestButton = () => {};
  return (
    <div className="display-flex-row container-newsBar">
      <div className="display-flex-row container-newsBar-buttons">
        <button
          className="container-newsBar-buttons__button"
          onClick={handleLatestButton()}
        >
          Latest
        </button>
        <button className="container-newsBar-buttons__button">Popular</button>
      </div>
      <img className="container-newsBar__img " src={filter} alt="filter" />
    </div>
  );
};
