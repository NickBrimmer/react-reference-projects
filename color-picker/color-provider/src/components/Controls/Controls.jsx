import React from 'react';
import { useColorContext } from '../../hooks/ColorPickerProvider';

const Controls = () => {
  const { color, backgroundColor, text, handleChange } = useColorContext();
  return (
    <>
      <input type="color" name="color" value={color} onChange={handleChange} />
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={handleChange()} />
      <input type="text" name="text" value={text} onChange={handleChange()} />
    </>
  );
};

export default Controls;
