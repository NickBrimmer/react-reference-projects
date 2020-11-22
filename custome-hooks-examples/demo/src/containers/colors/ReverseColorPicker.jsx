import React from 'react';
import ColorControls from '../../components/colors/ColorControls';
import ColorDisplay from '../../components/colors/ColorDisplay';
import { useColorPicker } from '../../hooks/colorPickerHooks';

const ReverseColorPicker = () => {
  const {
    text,
    backgroundColor,
    textColor,
    handleChange
  } = useColorPicker();

  return (
    <>
      <ColorDisplay
        text={text}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
      <ColorControls
        text={text}
        backgroundColor={backgroundColor}
        textColor={textColor}
        onChange={handleChange}
      />
    </>
  );
};

export default ReverseColorPicker;
