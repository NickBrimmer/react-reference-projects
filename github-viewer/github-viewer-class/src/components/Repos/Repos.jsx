import React from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';

const Repos = ({ repos }) => {
  const repoElements = repos.map(repo => (
    <li key={repo.name}>
      <Repo {...repo} />
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    lastPush: PropTypes.string.isRequired
  })).isRequired
};

export default Repos;
