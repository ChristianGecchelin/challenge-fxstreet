import { createContext } from "react";

const Context = createContext();

function ContexProviderWrapper(props) {
  return <Context.Provider value={{}}>{props.children}</Context.Provider>;
}
export { ContexProviderWrapper, Context };
