import { createStore } from 'redux';
import reducer from './reducers/wordsReducer';

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// store.subscribe(() => {
//   console.log('Something happened!');
// });

// console.log(store.getState());

// store.dispatch(addDog({
//   name: 'rover',
//   age: 10,
//   weight: '50 lbs'
// }));

// console.log(store.getState());




// // const [state, dispatch] = useReducer(reducer, initialState)
// const store = createStore(reducer);




// // store.getState();
// console.log('store.getState()', store.getState());

// // store.dispatch()
// store.dispatch(increment());

// // here
// store.dispatch(increment()); 
// store.dispatch(decrement());
// store.dispatch(decrementBy(9));

// console.log('store.getState()', store.getState());
