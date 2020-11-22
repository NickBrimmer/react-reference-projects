import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ greeting }) => {
  return (
    <header>
      <h1>{greeting}</h1>
    </header>
  );
};

Header.propTypes = {
  greeting: PropTypes.string.isRequired
};

export default Header;
