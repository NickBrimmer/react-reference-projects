import { renderHook, act } from '@testing-library/react-hooks';
import { useColorPicker } from './colorPickerHooks';

describe('useColorPicker hook', () => {
  let result;
  beforeEach(() => {
    const hookResult = renderHook(() => useColorPicker());
    result = hookResult.result;
  });
  it('returns text state', () => {
    expect(result.current.text).not.toBeUndefined();
  });

  it('returns backgroundColor state', () => {
    expect(result.current.backgroundColor).not.toBeUndefined();
  });

  it('returns textColor state', () => {
    expect(result.current.textColor).not.toBeUndefined();
  });

  it('updates text state with handleChange', () => {
    // any function that changes state should be wrapped in act(() => ....)
    act(() => {
      result.current.handleChange({
        target: {
          name: 'text',
          value: 'Hello'
        }
      });
    });

    expect(result.current.text).toEqual('Hello');
  });

  it('updates backgroundColor with handleChange', () => {
    act(() => {
      result.current.handleChange({
        target: {
          name: 'backgroundColor',
          value: '#FF0000'
        }
      });
    });

    expect(result.current.backgroundColor).toEqual('#FF0000');
  });

  it('updates textColor with handleChange', () => {
    const { result, waitFor } = renderHook(() => useColorPicker());
    act(() => {
      result.current.handleChange({
        target: {
          name: 'textColor',
          value: '#00FF00'
        }
      });
      
      return waitFor(() => {
        expect(result.current.textColor).toEqual('#00FF00');
      });
    });
  });
});
