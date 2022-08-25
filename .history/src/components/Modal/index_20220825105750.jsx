import { useContext } from "react";
import { Context } from "../../context/Context";
export const Modal = () => {
  const { popular } = useContext(Context);
  return (
    <div>
      <h1>HOla</h1>
    </div>
  );
};
