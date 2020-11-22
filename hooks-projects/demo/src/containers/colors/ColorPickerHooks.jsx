import React, { useState } from 'react';
import ColorControls from '../../components/colors/ColorControls';
import ColorDisplay from '../../components/colors/ColorDisplay';

const ColorPickerHooks = () => {
  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [textColor, setTextColor] = useState('#000000');

  const handleChange = ({ target }) => {
    // if(target.name === 'text') setText(target.value);
    // if(target.name === 'backgroundColor') setBackgroundColor(target.value);
    // if(target.name === 'textColor') setTextColor(target.value);

    // switch(target.name) {
    //   case 'text':
    //     setText(target.value);
    //     break;
    //   case 'backgroundColor':
    //     setBackgroundColor(target.value);
    //     break;
    //   case 'textColor':
    //     setTextColor(target.value);
    //     break;
    // }

    const setterObj = {
      text: setText,
      backgroundColor: setBackgroundColor,
      textColor: setTextColor
    };

    setterObj[target.name]?.(target.value);
  };

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
