import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home/Home';
import VideoDetail from '../VideoDetail/VideoDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={VideoDetail} />
      </Switch>
    </Router>
  );
}
  
