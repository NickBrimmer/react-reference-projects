/* eslint-disable no-undef */
import { makeRequest } from './makeRequest';

describe('makeRequest service', () => {
  it('uses fetch with post and a body', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve()
    }));

    return makeRequest('https://test.com', 'POST', '{"test":"1234"}')
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://test.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ test: '1234' })
        });
      });
  });

  it('uses fetch with get', () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve()
    }));

    return makeRequest('https://test.com', 'GET')
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://test.com', {
          method: 'GET',
          headers: {},
          body: null
        });
      });
  });
});
