import React from 'react';
import { useColorState } from '../../hooks/ColorPickerProvider';

const Display = () => {
  const { color, backgroundColor, text } = useColorState();

  return (
    <section style={{ color, backgroundColor }}>
      <h3>{text}</h3>
    </section>
  );
};

export default Display;
