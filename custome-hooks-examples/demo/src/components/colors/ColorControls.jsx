import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ text, backgroundColor, textColor, onChange }) => (
  <>
    <label htmlFor="text">Text</label>
    <input id="text" type="text" name="text" value={text} onChange={onChange} />

    <label htmlFor="backgroundColor">Background Color</label>
    <input id="backgroundColor" type="color" name="backgroundColor" value={backgroundColor} onChange={onChange} />

    <label htmlFor="textColor">Text Color</label>
    <input id="textColor" type="color" name="textColor" value={textColor} onChange={onChange} />
  </>
);

ColorControls.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ColorControls;
