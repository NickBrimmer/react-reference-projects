import { getComments, getCommentsByVideoId } from './commentsSelectors';

describe('comments selectors', () => {
  it('gets a list of comments from state', () => {
    const state = {
      videos: [],
      comments: [
        { videoId: '1234', text: 'My first comment' },
        { videoId: '1234', text: 'My second comment' }
      ]
    };

    const comments = getComments(state);

    expect(comments).toEqual([
      { videoId: '1234', text: 'My first comment' },
      { videoId: '1234', text: 'My second comment' }
    ]);
  });

  it('gets a list of comments for a video id', () => {
    const state = {
      videos: [],
      comments: [
        { videoId: '1234', text: 'My first comment' },
        { videoId: '1235', text: 'My first bad comment' },
        { videoId: '1236', text: 'My second good comment' },
        { videoId: '1234', text: 'My second comment' }
      ]
    };

    const comments = getCommentsByVideoId(state, '1234');

    expect(comments).toEqual([
      { videoId: '1234', text: 'My first comment' },
      { videoId: '1234', text: 'My second comment' }
    ]);

  });
});
