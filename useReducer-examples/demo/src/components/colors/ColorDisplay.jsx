import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ text, backgroundColor, textColor }) => (
  <section style={{ backgroundColor, color: textColor, width: '200px', height: '200px' }}>
    <p>{text}</p>
  </section>
);

ColorDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired
};

export default ColorDisplay;
