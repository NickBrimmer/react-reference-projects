import React from 'react';
import PropTypes from 'prop-types';

const CatNames = ({ cats }) => {
  const catElements = cats.map(cat => (
    <li key={cat._id}>
      {cat.name}
    </li>
  ));

  return (
    <ul>
      {catElements}
    </ul>
  );
};

CatNames.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    spicyFactor: PropTypes.string.isRequired
  })).isRequired
};

export default CatNames;
