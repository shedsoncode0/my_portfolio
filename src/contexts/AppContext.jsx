import { createContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [move, setMove] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    run: false
  });
  return (
    <AppContext.Provider value={{ move, setMove }}>
      {children}
    </AppContext.Provider>
  );
};
