import React from 'react';
import { useCurrentUser } from '../../hooks/authHooks';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line react/prop-types
const LoggedIn = ({ user, onClick }) => (
  <>
    <img src={`https://ui-avatars.com/api/?name=${user.email}&size=100`} />
    <button onClick={onClick}>Logout</button>
  </>
);

const Header = () => {
  const dispatch = useDispatch();
  const user = useCurrentUser();

  const handleLogout = () => {
    // dispatch an action
    dispatch(logout());
  };

  return (
    <header>
      <h1>Note.ly</h1>
      {user && <LoggedIn user={user} onClick={handleLogout} />}
      {!user && <Link to="/auth">Signup/Login</Link>}
    </header>
  );
};

export default Header;
