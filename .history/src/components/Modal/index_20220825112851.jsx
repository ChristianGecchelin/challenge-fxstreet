import { useContext } from "react";
import { Context } from "../../context/Context";
export const Modal = () => {
  const { modal, setModal, modalHideOptions, setModalHideOptions } =
    useContext(Context);

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
    return <div></div>;
  }
};
