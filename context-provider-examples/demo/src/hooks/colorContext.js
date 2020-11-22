import React, { useContext } from 'react';

export const ColorContext = React.createContext();

export const useColor = () => {
  return useContext(ColorContext);
};

export const useColorText = () => {
  const { text } = useColor();
  return text;
};
