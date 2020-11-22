import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

const Quote = ({ character, text, image }) => (
  <section className={styles.Quote}>
    <img src={image} />
    <p>{character}</p>
    <p>&quot;{text}&quot;</p>
  </section>
);

Quote.propTypes = {
  character: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
