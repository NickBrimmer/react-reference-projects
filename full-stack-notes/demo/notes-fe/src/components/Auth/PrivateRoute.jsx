import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthLoading } from '../../selectors/authSelectors';
import { useCurrentUser } from '../../hooks/authHooks';

const PrivateRoute = (props) => {
  // check if logged in
  const user = useCurrentUser();
  const loading = useSelector(getAuthLoading);

  // if not logged in redirect to the login page
  if(!user && !loading) {
    return <Redirect to="/auth" />;
  }

  if(loading) {
    return <h1>Loading</h1>;
  }

  // if we are logged in route normally
  return <Route {...props} />;
};

export default PrivateRoute;
