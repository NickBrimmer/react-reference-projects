import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../../pages/home/Home';
import CountPage from '../../pages/count/CountPage';
import CharactersPage from '../../pages/characters/CharactersPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/count" component={CountPage} />
        <Route exact path="/characters" component={CharactersPage} />
      </Switch>
    </Router>
  );
}
