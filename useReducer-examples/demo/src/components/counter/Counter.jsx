import React from 'react';
import { useReducer } from 'react';

// state -> the current state
// action -> is what happened (POJO)
// -> -> actions = { type, payload? }
function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 80 });

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <>
      Count: {state.count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
