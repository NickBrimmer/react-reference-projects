import { SET_USER, SET_USER_ERROR, SET_USER_LOADING } from '../actions/authActions';
import reducer from './authReducer';

describe('auth reducer', () => {
  it('handles the SET_USER action', () => {
    const state = {
      user: null,
      loading: true
    };

    const action = {
      type: SET_USER,
      payload: {
        _id: '1234',
        email: 'test@test.com'
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: {
        _id: '1234',
        email: 'test@test.com'
      },
      error: null,
      loading: false
    });
  });

  it('handles the SET_USER action and removes errors', () => {
    const state = {
      user: null,
      error: 'wrong password',
      loading: true
    };

    const action = {
      type: SET_USER,
      payload: {
        _id: '1234',
        email: 'test@test.com'
      }
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: {
        _id: '1234',
        email: 'test@test.com'
      },
      error: null,
      loading: false
    });
  });

  it('handles the SET_USER_ERROR action', () => {
    const state = {
      user: null,
      error: null,
      loading: true
    };

    const action = {
      type: SET_USER_ERROR,
      payload: 'oops cant do that'
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: null,
      error: 'oops cant do that',
      loading: false
    });
  });

  it('handles the SET_USER_LOADING action', () => {
    const state = {
      user: null,
      error: null,
      loading: false
    };

    const action = {
      type: SET_USER_LOADING
    };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      user: null,
      error: null,
      loading: true
    });
  });
});
