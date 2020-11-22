import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from '../../hooks/appContext';
import { getVideoThumbnails } from '../../selectors/videoSelectors';

const Thumbnails = () => {
  const videoThumbnails = useSelector(getVideoThumbnails);

  const thumbnailElements = videoThumbnails.map(({ id, url }) => (
    <li key={id}>
      <Link to={`/${id}`}>
        <img src={url} alt={id} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {thumbnailElements}
    </ul>
  );
};

export default Thumbnails;
