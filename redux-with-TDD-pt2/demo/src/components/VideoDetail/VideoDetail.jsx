import React from 'react';
import { useParams } from 'react-router-dom';
import Player from '../Player/Player';
import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';

const VideoDetail = () => {
  const { id } = useParams();
  
  return (
    <>
      <h1>Video - {id}</h1>
      <Player videoId={id} />
      <CommentForm />
      <Comments />
    </>
  );
};

export default VideoDetail;
