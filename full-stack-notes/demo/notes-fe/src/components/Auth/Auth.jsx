import React from 'react';
import Error from '../Error/Error';
import { useSignupAndLogin } from '../../hooks/authHooks';

const Auth = () => {
  const {
    error,
    loading,
    email,
    password,
    passwordType,
    togglePasswordType,
    handleChange,
    signupHandler,
    loginHandler
  } = useSignupAndLogin();

  return (
    <>
      <Error error={error} />
      <form>
        <input type="text" name="email" value={email} onChange={handleChange} placeholder="email" />
        <input type={passwordType} name="password" value={password} onChange={handleChange} placeholder="password" />
        <button type="button" onClick={togglePasswordType}>👁️</button>
        <button type="button" disabled={loading} onClick={signupHandler}>Signup</button>
        <button type="button" disabled={loading} onClick={loginHandler}>Login</button>
      </form>
    </>
  );
};

export default Auth;
