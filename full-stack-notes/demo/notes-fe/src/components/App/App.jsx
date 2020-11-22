import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../Home/Home';
import Auth from '../Auth/Auth';
import PrivateRoute from '../Auth/PrivateRoute';
import Header from '../Header/Header';
import NotePage from '../Notes/NotePage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/notes" component={NotePage} />
      </Switch>
    </Router>
  );
}
  
