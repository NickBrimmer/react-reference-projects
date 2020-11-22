import { useState } from 'react';

export const useColorPicker = () => {
  const [color, setColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [text, setText] = useState('My Cool Hook App');

  const handleChange = ({ target }) => {
    if(target.name === 'color') setColor(target.value);
    if(target.name === 'backgroundColor') setBackgroundColor(target.value);
    if(target.name === 'text') setText(target.value);
  };

  return { color, backgroundColor, text, handleChange };
};
