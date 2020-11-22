import React from 'react';
import { useCount } from '../../hooks/countContext';

const CountDisplay = () => {
  const count = useCount();

  return <h2>{count}</h2>;
};

export default CountDisplay;
