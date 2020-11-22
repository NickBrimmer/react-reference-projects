// combineReducers({
//   notes: notesReducer,
//   auth: authReducer
// });

export const combineReducers = reducerObj => {
  return function(state, action) {
    return Object.entries(reducerObj)
      .reduce((acc, [stateKey, reducer]) => {
        acc[stateKey] = reducer(state, action);
        return acc;
      }, {});
  };
};
