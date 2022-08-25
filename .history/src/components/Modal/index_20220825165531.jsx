import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import backArrow from "../../assets/back.png";
import tune from "../../assets/tune.png";
import hidden from "../../assets/hidden.png";
import "./modal.css";
const reasons = [
  "I'm not interested in this author",
  "I'm not interested in this topic",
  "I've seen too many posts on this topic",
  "The information is incorrect",
  "I've seen this post before",
  "Other reasons",
];
export const Modal = () => {
  const { modal, setModal, modalHideOptions, setModalHideOptions } =
    useContext(Context);

  const [checkedState, setCheckedState] = useState(
    new Array(reasons.length).fill(false)
  );

  const handleHideButton = () => {
    setModalHideOptions(true);
    setModal(false);
  };

  const handleCheckBox = (position) => {
    const updatedCheckedState = checkedState.map((item, index) => {
      return index === position ? !item : item;
    });

    setCheckedState(updatedCheckedState);
  };

  const handleBackButton = () => {
    setModalHideOptions(false);
    setModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCheckedState = checkedState.map((item) => {
      return item ? !item : item;
    });
    setCheckedState(updatedCheckedState);
  };

  if (modal && !modalHideOptions) {
    return (
      <div className="modalBackground">
        <div className="display-flex-column container-modal">
          <div className="display-flex-row container-modal-options-header">
            <button
              className="close-modal-button"
              onClick={() => setModal(false)}
            >
              X
            </button>
          </div>
          <div
            onClick={handleHideButton}
            className="row-container-text display-flex-row"
          >
            <img src={hidden} alt="" />
            <p>Hide</p>
          </div>
          <div className="row-container-text display-flex-row">
            <img src={tune} alt="" />
            <p>Improve My Feed</p>
          </div>
        </div>
      </div>
    );
  } else if (!modal && modalHideOptions) {
    return (
      <div className="modalBackground">
        <div className="display-flex-column container-modal-options">
          <div className="display-flex-row container-modal-options-header">
            <p>
              <span>
                <img
                  onClick={handleBackButton}
                  className="header__image-back"
                  src={backArrow}
                  alt="back"
                />
              </span>
              Tell us why:
            </p>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="display-flex-column container-modal-options-form"
          >
            {reasons.map((reason, index) => {
              return (
                <label htmlFor={`custom-checkbox-${index}`} key={index}>
                  <input
                    id={`custom-checkbox-${index}`}
                    type="checkbox"
                    name={reason}
                    value={reason}
                    onChange={() => handleCheckBox(index)}
                    checked={checkedState[index]}
                  />
                  <span>{reason}</span>
                </label>
              );
            })}
            <button type="submit">Hide Content</button>
          </form>
        </div>
      </div>
    );
  }
};
