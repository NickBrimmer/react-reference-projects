import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { TriviaProvider } from './hooks/TriviaProvider';

render(
  <TriviaProvider>
    <App />
  </TriviaProvider>,
  document.getElementById('root')
);
