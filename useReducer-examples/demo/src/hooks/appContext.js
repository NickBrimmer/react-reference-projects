import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useQuote = () => {
  const { state } = useContext(AppContext);
  return state.quote;
};

export const useTheme = () => {
  const { state } = useContext(AppContext);
  return state.theme;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};
