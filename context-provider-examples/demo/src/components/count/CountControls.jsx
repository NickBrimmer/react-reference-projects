import React from 'react';
import { useCountControls } from '../../hooks/countContext';

const CountControls = () => {
  const { decrement, increment } = useCountControls();

  return (
    <>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default CountControls;
