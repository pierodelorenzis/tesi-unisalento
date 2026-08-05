import { createContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [cssValue, setCssValue] = useState('initial_value');

  return (
    <GlobalContext.Provider value={{ cssValue, setCssValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
