import { useState } from 'react';

export const useColorPicker = () => {
  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');

  const handleChange = ({ target }) => {
    if(target.name === 'text') setText(target.value);
    if(target.name === 'backgroundColor') setBackgroundColor(target.value);
    if(target.name === 'textColor') setTextColor(target.value);
  };

  return {
    text,
    backgroundColor,
    textColor,
    handleChange
  };
};
