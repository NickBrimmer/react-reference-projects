import React, { useState, useReducer } from 'react';
import ColorControls from '../components/colors/ColorControls';
import ColorDisplay from '../components/colors/ColorDisplay';
import reducer, { initialState } from '../reducers/colorReducer';

const useOurReducer = (reducerFn, firstState) => {
  const [state, setState] = useState(firstState);

  const dispatch = action => {
    const newState = reducerFn(state, action);
    setState(newState);
  };

  return [
    state,
    dispatch
  ];
};

const ColorPicker = () => {
  // const [state, setState] = useState(initialState);
  const [state, dispatch] = useOurReducer(reducer, initialState);

  const { text, backgroundColor, textColor } = state;

  const handleChange = ({ target }) => {
    dispatch({ type: target.name, payload: target.value });
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


export default ColorPicker;
