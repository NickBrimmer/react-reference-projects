import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ color, backgroundColor, text, onChange }) => (
  <>
    <input type="color" name="color" value={color} onChange={onChange} />
    <input type="color" name="backgroundColor" value={backgroundColor} onChange={onChange} />
    <input type="text" name="text" value={text} onChange={onChange} />
  </>
);

Controls.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Controls;
