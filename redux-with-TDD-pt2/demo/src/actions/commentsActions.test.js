import { addComment, ADD_COMMENT } from './commentsActions';

describe('comments actions', () => {
  it('creates an add comment action', () => {
    const action = addComment('1234', 'My first comment');

    expect(action).toEqual({
      type: ADD_COMMENT,
      payload: {
        videoId: '1234',
        text: 'My first comment'
      }
    });
  });
});
