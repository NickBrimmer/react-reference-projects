import React, { createContext, useState } from 'react';

export const NumberContext = createContext();

// is a component that will provide our global state
// these are like containers
export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState(5);

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      {children}
    </NumberContext.Provider>
  );
};
