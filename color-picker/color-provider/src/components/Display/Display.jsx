import React from 'react';
import { useColorContext } from '../../hooks/ColorPickerProvider';

const Display = () => {
  const { color, backgroundColor, text } = useColorContext();
  // const color = useColor();
  // const backgroundColor = useBackgroundColor();
  // const text = useText();

  return (
    <section style={{ color, backgroundColor }}>
      <h3>{text}</h3>
    </section>
  );
};

export default Display;
