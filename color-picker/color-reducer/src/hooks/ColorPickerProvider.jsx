import React, { createContext, useReducer, useContext } from 'react';
import { useState } from 'react';

const ColorContext = createContext();

const initialState = {
  color: '#000000',
  backgroundColor: '#FFFFFF',
  text: 'My Very Interesting Reducer App'
};

function reducer(state, action) {
  // take an action and update state based on the action
  switch(action.type) {
    case 'color':
      // this.setState({ [target.name]: target.value })
      return { ...state, color: action.payload };
    case 'backgroundColor':
      return { ...state, backgroundColor: action.payload };
    case 'text':
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

export const ColorPickerProvider = ({ children }) => {
  // const [color, setColor] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColorState = () => {
  const { state } = useContext(ColorContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(ColorContext);
  return dispatch;
};
