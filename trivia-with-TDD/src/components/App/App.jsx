import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home/Home';
import Question from '../Question/Question';
import Results from '../Results/Results';

// function reducer(state, action) {
//   switch(action.type) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return 0;
//     case 'set':
//       return action.payload;
//     default:
//       return state;
//   }
// }

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/question" component={Question} />
        <Route path="/results" component={Results} />
      </Switch>
    </Router>
  );
  // const [state, dispatch] = useReducer(reducer, 0);
  // return (
  //   <>
  //     <h1>{state}</h1>
  //     <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
  //     <button onClick={() => dispatch({ type: 'increment' })}>+</button>
  //     <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
  //     <input type="number" value={state} onChange={({ target }) => dispatch({ type: 'set', payload: Number(target.value) })} />
  //   </>
  // );
}
  
