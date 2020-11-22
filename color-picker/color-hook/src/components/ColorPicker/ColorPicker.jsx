import React from 'react';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import { useColorPicker } from '../../hooks/color';

export default function ColorPicker() {
  const { color, backgroundColor, text, handleChange } = useColorPicker();

  return (
    <>
      <Controls
        color={color}
        backgroundColor={backgroundColor}
        text={text}
        onChange={handleChange}
      />
      <Display
        color={color}
        backgroundColor={backgroundColor}
        text={text}
      />
    </>
  );
}
