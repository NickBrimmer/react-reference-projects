import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


// function middleware(store) {
//   return function (next) {
//     return function(action) {
//       // logic
//     }
//   }
// }

// const asyncActionMiddleware = store => next => action => {
//   // store - this is the redux store (getState and dispatch props)
//   // next - is our way to move to the next middleware
//   // action - is the action that was dispatched

//   // be normal
//   if(typeof action !== 'function') return next(action);

//   action(store.dispatch);
// };

// const logger = store => next => action => {
//   console.log(`${action.type} was dispatched with a payload of ${action.payload}`);
//   next(action);
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk),
  )
);
