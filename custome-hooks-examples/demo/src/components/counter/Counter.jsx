import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);

  return (
    <>
      <button onClick={increment}>Increments</button>
      <p>{count}</p>
    </>
  );
};


export default Counter;
