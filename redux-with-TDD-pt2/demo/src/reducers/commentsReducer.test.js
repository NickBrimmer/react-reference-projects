import { addComment } from '../actions/commentsActions';
import reducer from './commentsReducer';

describe('comments reducer', () => {
  it('handles the ADD_COMMENT action', () => {
    const state = [];
    const action = addComment('1234', 'My first comment');

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      text: 'My first comment',
      videoId: '1234'
    }]);
  });
});
