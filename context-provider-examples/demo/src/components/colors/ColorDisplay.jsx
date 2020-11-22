import React from 'react';
import { useColor } from '../../hooks/colorContext';

const ColorDisplay = () => {
  const {
    text,
    backgroundColor,
    textColor
  } = useColor();
  
  return (
    <section style={{ width: '200px', height: '200px', backgroundColor, color: textColor }}>
      <p>{text}</p>
    </section>
  );
};

export default ColorDisplay;
