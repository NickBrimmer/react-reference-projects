export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (videoId, text) => ({
  type: ADD_COMMENT,
  payload: {
    videoId,
    text
  }
});
