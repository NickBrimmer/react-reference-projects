import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVideo } from '../../actions/videosActions';

const VideoForm = () => {
  const [videoId, setVideoId] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addVideo(videoId));
    setVideoId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={videoId} onChange={({ target }) => setVideoId(target.value)} />
      <button>Add Video</button>
    </form>
  );
};

VideoForm.propTypes = {};

export default VideoForm;
