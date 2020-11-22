import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import './index.css';
import { Provider } from './store/Store';
import reducer, { initialState } from './reducers/quoteReducer';

render(
  <Provider reducer={reducer} initialState={initialState}>
    <App />
  </Provider>,
  document.getElementById('root')
);
