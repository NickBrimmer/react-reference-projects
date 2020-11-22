import React from 'react';
import { ColorContext } from '../../hooks/colorContext';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const ColorProvider = ({ children }) => {
  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');

  const handleChange = ({ target }) => {
    if(target.name === 'text') setText(target.value);
    if(target.name === 'backgroundColor') setBackgroundColor(target.value);
    if(target.name === 'textColor') setTextColor(target.value);
  };

  const providedValue = {
    text,
    backgroundColor,
    textColor,
    handleChange
  };

  return (
    <ColorContext.Provider value={providedValue}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
