import React, {useState} from "react";

export const usePersistedState = (defaultValue, key) => {
  const value = JSON.parse(localStorage.getItem(key));
  const [state, setState] = React.useState(
    value === "" ? value : value || defaultValue,
    key
  );
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  const resetSate = () => setState(defaultValue);
  return [state, setState, resetSate];
};

export const AppContext = React.createContext(null);

export const useAppContext = () => React.useContext(AppContext);

let store;

export const getStore = () => ({ ...store });

export const AppContextProvider = ({ children }) => {
  const sidebar = usePersistedState(false, "sidebar");

  store = {
    sidebar
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
