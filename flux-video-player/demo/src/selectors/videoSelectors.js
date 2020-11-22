export const getVideoIds = state => state.videoIds;

export const getVideoThumbnails = state => {
  return getVideoIds(state)
    .map(id => ({
      id,
      url: `https://img.youtube.com/vi/${id}/default.jpg`
    }));
};
