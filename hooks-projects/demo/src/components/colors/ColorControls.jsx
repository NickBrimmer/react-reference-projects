import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ text, backgroundColor, textColor, onChange }) => (
  <>
    <input type="text" name="text" value={text} onChange={onChange} />
    <input type="color" name="backgroundColor" value={backgroundColor} onChange={onChange} />
    <input type="color" name="textColor" value={textColor} onChange={onChange} />
  </>
);

ColorControls.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorControls;
