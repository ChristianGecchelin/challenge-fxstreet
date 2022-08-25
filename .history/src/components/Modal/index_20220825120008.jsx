import { useContext, useState } from "react";
import { Context } from "../../context/Context";
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
      console.log(item);
      return index === position ? !item : item;
    });

    setCheckedState(updatedCheckedState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const element of checkedState) {
      console.log(element);
      setCheckedState(false);
    }
  };
  console.log(checkedState);
  if (modal && !modalHideOptions) {
    return (
      <div className="display-flex-column">
        <div onClick={handleHideButton}>
          <img src="" alt="" />
          <p>Hide</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>Improve My Feed</p>
        </div>
      </div>
    );
  } else if (!modal && modalHideOptions) {
    return (
      <div>
        <div>
          <p>
            <span>
              <img src="" alt="" />
            </span>
            Tell us why:
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          {reasons.map((reason, index) => {
            return (
              <label htmlFor={`custom-checkbox-${index}`}>
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
    );
  }
};
