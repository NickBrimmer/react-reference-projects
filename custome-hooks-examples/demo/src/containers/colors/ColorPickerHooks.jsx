import React, { useState } from 'react';
import ColorControls from '../../components/colors/ColorControls';
import ColorDisplay from '../../components/colors/ColorDisplay';
import { useColorPicker } from '../../hooks/colorPickerHooks';

const ColorPickerHooks = () => {
  // const [text, setText] = useState('');
  // const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  // const [textColor, setTextColor] = useState('#000000');

  // const handleChange = ({ target }) => {
  //   if(target.name === 'text') setText(target.value);
  //   if(target.name === 'backgroundColor') setBackgroundColor(target.value);
  //   if(target.name === 'textColor') setTextColor(target.value);
  // };

  const {
    text,
    backgroundColor,
    textColor,
    handleChange
  } = useColorPicker();

  return (
    <>
      <ColorControls
        text={text}
        backgroundColor={backgroundColor}
        textColor={textColor}
        onChange={handleChange}
      />
      <ColorDisplay
        text={text}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    </>
  );
};

export default ColorPickerHooks;
