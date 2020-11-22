export const getVideos = state => state.videos;

export const getVideoImages = state => getVideos(state)
  .map(videoId => ({
    id: videoId,
    url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }));
