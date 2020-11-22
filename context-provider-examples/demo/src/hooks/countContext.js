import React, { useContext } from 'react';

export const CountContext = React.createContext();

export const useCount = () => {
  const { count } = useContext(CountContext);
  return count;
};

export const useCountControls = () => {
  const { decrement, increment } = useContext(CountContext);
  return { decrement, increment };
};

export const useDecrement = () => {
  const { decrement } = useContext(CountContext);
  return decrement;
};

export const useIncrement = () => {
  const { increment } = useContext(CountContext);
  return increment;
};
