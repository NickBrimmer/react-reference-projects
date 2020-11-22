import React from 'react';
import { useColorState, useDispatch } from '../../hooks/ColorPickerProvider';

const Controls = () => {
  const { color, backgroundColor, text } = useColorState();
  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    dispatch({
      type: target.name,
      payload: target.value
    });
  };

  return (
    <>
      <input type="color" name="color" value={color} onChange={onChange} />
      <input type="color" name="backgroundColor" value={backgroundColor} onChange={onChange} />
      <input type="text" name="text" value={text} onChange={onChange} />
    </>
  );
};

export default Controls;
