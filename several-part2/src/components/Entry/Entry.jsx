import React from 'react';
import PropTypes from 'prop-types';

const Entry = ({ year, text }) => (
  <section>
    <p>{year}</p>
    <p>{text}</p>
  </section>
);

Entry.propTypes = {
  year: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Entry;
