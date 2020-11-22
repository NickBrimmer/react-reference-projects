import React from 'react';
import PropTypes from 'prop-types';
import styles from './Video.css';

const Video = ({ url }) => (
  <img className={styles.Video} src={url} />
);

Video.propTypes = {
  url: PropTypes.string.isRequired
};

export default Video;
