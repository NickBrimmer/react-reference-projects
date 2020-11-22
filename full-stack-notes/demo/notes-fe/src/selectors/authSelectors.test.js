import { getAuthError, getAuth, getAuthLoading, getAuthUser } from './authSelectors';

describe('auth selectors', () => {
  it('selects auth state', () => {
    const state = {
      auth: {
        user: null,
        error: 'my error'
      }
    };

    const authState = getAuth(state);

    expect(authState).toEqual({
      user: null,
      error: 'my error'
    });
  });

  it('selects error messages from state', () => {
    const state = {
      auth: {
        error: 'my error'
      }
    };

    const error = getAuthError(state);
    
    expect(error).toEqual('my error');
  });

  it('selects the loading state', () => {
    const state = {
      auth: {
        loading: true
      }
    };

    const loading = getAuthLoading(state);
    
    expect(loading).toEqual(true);
  });

  it('selects the user from state', () => {
    const state = {
      auth: {
        user: {
          _id: '1234',
          email: 'test@test.com'
        }
      }
    };
    const user = getAuthUser(state);

    expect(user).toEqual({
      _id: '1234',
      email: 'test@test.com'
    });
  });
});
