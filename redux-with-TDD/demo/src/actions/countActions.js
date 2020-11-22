// action creators
// functions that create actions
// functions that return objects

export const INCREMENT = 'INCREMENT';
export const increment = () => ({
  type: INCREMENT
});

export const DECREMENT = 'DECREMENT';
export const decrement = () => ({
  type: DECREMENT
});

export const DECREMENT_BY = 'DECREMENT_BY';
export const decrementBy = by => ({
  type: DECREMENT_BY,
  payload: by
});
