import React from 'react';
import { useSelector } from 'react-redux';
import { getVideoImages } from '../../selectors/videosSelectors';
import Video from './Video';
import styles from './Videos.css';
import { Link } from 'react-router-dom';

const Videos = () => {
  const videoImages = useSelector(getVideoImages);

  const videoElements = videoImages.map(({ id, url }) => (
    <li key={id}>
      <Link to={`/${id}`}>
        <Video url={url} />
      </Link>
    </li>
  ));

  return (
    <ul className={styles.Videos}>
      {videoElements}
    </ul>
  );
};

export default Videos;
