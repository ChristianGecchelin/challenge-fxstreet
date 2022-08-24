import { createContext } from "react";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
}
export { AuthProviderWrapper, AuthContext };
