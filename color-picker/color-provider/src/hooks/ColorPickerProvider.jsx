import React, { createContext, useState, useContext } from 'react';

const ColorContext = createContext();

export const ColorPickerProvider = ({ children }) => {
  const [color, setColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [text, setText] = useState('My Great Provider App');

  const handleChange = ({ target }) => {
    if(target.name === 'color') setColor(target.value);
    if(target.name === 'backgroundColor') setBackgroundColor(target.value);
    if(target.name === 'text') setText(target.value);
  };

  return (
    <ColorContext.Provider value={{ color, backgroundColor, text, handleChange }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorContext = () => {
  const context = useContext(ColorContext);
  return context;
};

export const useColor = () => {
  const { color } = useColorContext();
  return color;
};

export const useBackgroundColor = () => {
  const { backgroundColor } = useColorContext();
  return backgroundColor;
};

export const useText = () => {
  const { text } = useColorContext();
  return text;
};
