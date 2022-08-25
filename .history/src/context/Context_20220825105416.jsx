import { createContext, useState } from "react";

const Context = createContext();

function ContexProviderWrapper(props) {
  const [latest, setLatest] = useState(true);
  const [popular, setPopular] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalHideOptions, setModalHideOptions] = useState(false);

  return (
    <Context.Provider
      value={{ latest, setLatest, popular, setPopular, modal, setModal }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContexProviderWrapper, Context };
