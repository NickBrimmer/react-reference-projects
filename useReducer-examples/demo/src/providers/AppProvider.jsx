import React, { useReducer } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
import { useEffect } from 'react';
import { fetchQuote } from '../services/futuramaApi';

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchQuote()
      .then(quote => dispatch({ type: 'SET_QUOTE', payload: quote }));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
