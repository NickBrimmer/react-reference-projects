import React from 'react';
import { useColor } from '../../hooks/colorContext';

const ColorControls = () => {
  const {
    text,
    backgroundColor,
    textColor,
    handleChange
  } = useColor();

  return (
    <>
      <input type="text" name="text" value={text} onChange={handleChange} />
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={handleChange} />
      <input type="color" name="textColor" value={textColor} onChange={handleChange} />
    </>
  );
};

export default ColorControls;
