import React, { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Lifecycle from '../Lifecycle';
import Effect from '../Effect';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Link to="/effect">effect</Link>
      <Switch>
        <Route path="/" component={Lifecycle} />
        <Route path="/effect" component={Effect} />
      </Switch>
    </Router>
  );
}
  
