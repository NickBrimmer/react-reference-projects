import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ image }) => (
  <figure className={styles.Character}>
    <img src={image} />
  </figure>
);

Character.propTypes = {
  image: PropTypes.string.isRequired
};

export default Character;
