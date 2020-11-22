import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import VideoAdder from '../videos/VideoAdder';
import Thumbnails from '../videos/Thumbnails';
import VideoPlayer from '../videos/VideoPlayer';

export default function App() {
  return (
    <Router>
      <VideoAdder />
      <Switch>
        <Route exact path="/" component={Thumbnails} />
        <Route exact path="/:videoId" component={VideoPlayer} />
      </Switch>
    </Router>
  );
}
  
