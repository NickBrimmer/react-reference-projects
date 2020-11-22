import React, { useState } from 'react';
import { useDispatch } from '../../hooks/appContext';
import { addVideo } from '../../actions/videoActions';

// store the input value locally
// and after submit store the value globally
const VideoAdder = () => {
  const dispatch = useDispatch();
  const [videoId, setVideoId] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addVideo(videoId));
    setVideoId('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="youtube video id" value={videoId} onChange={({ target }) => setVideoId(target.value)} />
      <button>Add Video</button>
    </form>
  );
};

export default VideoAdder;
