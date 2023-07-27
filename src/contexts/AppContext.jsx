import { createContext, useEffect, useRef, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [move, setMove] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    run: false,
  });
  const [speed, setSpeed] = useState({
    runSpeed: 0,
    walkSpeed: 0,
  });
  return (
    <AppContext.Provider value={{ move, setMove, speed, setSpeed }}>
      {children}
    </AppContext.Provider>
  );
};
