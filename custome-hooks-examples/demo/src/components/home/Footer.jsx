import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer>
      <p>This is a footer: {location.pathname}</p>
    </footer>
  );
};

export default Footer;
