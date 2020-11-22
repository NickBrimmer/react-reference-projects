import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../home/Home';
import ColorPicker from '../../containers/colors/ColorPicker';
import Title from '../title/Title';
import Counter from '../counter/Counter';
import ColorPickerHooks from '../../containers/colors/ColorPickerHooks';
import ThisDay from '../../containers/thisDay/ThisDay';
import QuotesContainer from '../../containers/quotes/QuotesContainer';

export default function App() {
  return (
    <Router>
      <h1>My Color App on all pages</h1>
      <Switch>
        <Route path="/today" component={ThisDay} />
        <Route path="/quotes" component={QuotesContainer} />
        <Route path="/title" component={Title} />
        <Route path="/counter" component={Counter} />
        <Route path="/color" component={ColorPicker} />
        <Route path="/colorHooks" component={ColorPickerHooks} />
        <Route exact path="/:name" component={Home} />
      </Switch>
    </Router>
  );
}

// module.exports = Router() // Attach the Router
//   .post('/:id', (req, res, next) => { // specify Route path=/ handler=(req, res, next) => 
// req.params.id
//   });
