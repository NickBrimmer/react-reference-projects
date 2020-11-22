import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word, definition }) => (
  <>
    <dt>{word}</dt>
    <dd>{definition}</dd>
  </>

);

Word.propTypes = {
  word: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired
};

export default Word;
