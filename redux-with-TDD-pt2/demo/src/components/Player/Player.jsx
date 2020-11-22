import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ videoId }) => (
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${videoId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
);

Player.propTypes = {
  videoId: PropTypes.string.isRequired
};

export default Player;
