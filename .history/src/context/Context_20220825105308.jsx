import { createContext, useState } from "react";

const Context = createContext();

function ContexProviderWrapper(props) {
  const [latest, setLatest] = useState(true);
  const [popular, setPopular] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <Context.Provider value={{ latest, setLatest, popular, setPopular }}>
      {props.children}
    </Context.Provider>
  );
}
export { ContexProviderWrapper, Context };
