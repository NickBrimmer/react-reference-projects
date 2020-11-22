export const getComments = state => state.comments;

export const getCommentsByVideoId = (state, videoId) =>
  getComments(state)
    .filter(comment => comment.videoId === videoId);
