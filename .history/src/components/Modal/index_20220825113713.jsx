import { useContext, useState } from "react";
import { Context } from "../../context/Context";
const reasons = [
  "I’m not interested in this author",
  "I’m not interested in this topic",
  "I’ve seen too many posts on this topic",
  "The information is incorrect",
  "I’ve seen this post before",
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
        <div>Header</div>
        <form action=""></form>
      </div>
    );
  }
};
