import { renderHook, act } from '@testing-library/react-hooks';
import { useThisDay } from './thisDayHooks';

jest.mock('../services/thisDay.js', () => ({
  getThisDay() {
    return Promise.resolve({
      events: [{ year: '1234', text: 'This happened' }],
      births: [{ year: '1345', text: 'This Birth happened' }],
      deaths: [{ year: '1456', text: 'This death happened' }]
    });
  }
}));

describe('useThisDay hooks', () => {
  it('has births state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useThisDay());
      return waitFor(() => {
        expect(result.current.births).not.toBeUndefined();
      });
    });
  });

  it('has deaths state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useThisDay());
      return waitFor(() => {
        expect(result.current.deaths).not.toBeUndefined();
      });
    });
  });

  it('has events state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useThisDay());
      return waitFor(() => {
        expect(result.current.events).not.toBeUndefined();
      });
    });
  });

  it('has loading state', () => {
    return act(() => {
      const { result, waitFor } = renderHook(() => useThisDay());
      return waitFor(() => {
        expect(result.current.loading).not.toBeUndefined();
      });
    });
  });

  it('sets the births, deaths, and events state on mount', () => {
    const { result, waitFor } = renderHook(() => useThisDay());

    return waitFor(() => {
      expect(result.current.births).toEqual([{ year: '1345', text: 'This Birth happened' }]);
      expect(result.current.deaths).toEqual([{ year: '1456', text: 'This death happened' }]);
      expect(result.current.events).toEqual([{ year: '1234', text: 'This happened' }]);
    });
  });

  it('sets loading to false after fetch is complete', () => {
    const { result, waitFor } = renderHook(() => useThisDay());

    return waitFor(() => {
      expect(result.current.loading).toEqual(false);
    });
  });
});
