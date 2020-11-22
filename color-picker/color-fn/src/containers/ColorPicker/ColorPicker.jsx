import React, { useState } from 'react';
import Display from '../../components/Display/Display';
import Controls from '../../components/Controls/Controls';

export default function ColorPicker() {
  const [color, setColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [text, setText] = useState('My Really Great Function Container App');

  const handleChange = ({ target }) => {
    const inputSetterFactory = {
      color: setColor,
      backgroundColor: setBackgroundColor,
      text: setText
    };

    inputSetterFactory[target.name](target.value);

    // switch(target.name) {
    //   case 'color':
    //     setColor(target.value);
    //     break;
    //   case 'backgroundColor':
    //     setBackgroundColor(target.value);
    //     break;
    //   case 'text':
    //     setText(target.value);
    //     break;
    // }
    // if(target.name === 'color') setColor(target.value);
    // if(target.name === 'backgroundColor') setBackgroundColor(target.value);
    // if(target.name === 'text') setText(target.value);
  };

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
