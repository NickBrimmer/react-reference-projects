import React from 'react';
import PropTypes from 'prop-types';

const CatForm = ({ name, color, spicyFactor, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="name" value={name} onChange={onChange} />
    <input type="text" name="color" value={color} onChange={onChange} />
    <input type="number" name="spicyFactor" value={spicyFactor} onChange={onChange} />
    <button>Submit</button>
  </form>
);

CatForm.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  spicyFactor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default CatForm;
