import React, { createContext, useContext, useState } from 'react';

const GlobalState = createContext();

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);

  const dispatch = action => {
    const newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};

// eslint-disable-next-line react/prop-types
export const Provider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const asyncDispatch = action => {
    if(typeof action !== 'function') return dispatch(action);
    action(asyncDispatch);
  };

  return (
    <GlobalState.Provider value={{ state, dispatch: asyncDispatch }}>
      {children}
    </GlobalState.Provider>
  );
}; 

export const useDispatch = () => {
  const { dispatch } = useContext(GlobalState);
  return dispatch;
};

export const useSelector = selectorFn => {
  const { state } = useContext(GlobalState);

  return selectorFn(state);
};
