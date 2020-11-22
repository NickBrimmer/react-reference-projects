import React from 'react';
import { CountContext } from '../../hooks/countContext';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const decrement = () => setCount(count => count - 1);
  const increment = () => setCount(count => count + 1);

  return (
    <CountContext.Provider value={{ count, decrement, increment }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountProvider;
