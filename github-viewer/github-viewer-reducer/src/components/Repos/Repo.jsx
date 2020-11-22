import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ name, url, lastPush}) => (
  <section>
    <h4>{name}</h4>
    <p>{lastPush}</p>
    <a href={url}>View Repo</a>
  </section>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  lastPush: PropTypes.string.isRequired
};

export default Repo;
