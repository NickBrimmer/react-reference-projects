import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, species }) => (
  <>  
    <h3>{name}</h3>
    <p>{species}</p>
  </>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;
