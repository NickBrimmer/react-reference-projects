import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ color, backgroundColor, text }) => (
  <section style={{ color, backgroundColor }}>
    <h3>{text}</h3>
  </section>
);

Display.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Display;
