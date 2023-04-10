import React, { createContext, useState } from "react";

export const ContextDarkMode = createContext({});

const ContextDarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const state = {
    isDarkMode,
    setIsDarkMode,
  };

  return (
    <ContextDarkMode.Provider value={state}>
      {children}
    </ContextDarkMode.Provider>
  );
};
export default ContextDarkModeProvider;
