import { addHabit, setHabits } from '../actions/habitsActions';
import reducer from './habitsReducer';

describe('habits reducer', () => {
  it('handle the ADD_HABIT action', () => {
    const state = [];
    const action = addHabit({
      _id: '12345a',
      title: 'My habit',
      description: 'my description',
      goal: 5,
      progress: 0
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        _id: '12345a',
        title: 'My habit',
        description: 'my description',
        goal: 5,
        progress: 0
      }
    ]);
  });

  it('handles the SET_HABITS action', () => {
    const state = [];
    const action = setHabits([{
      _id: '12345a',
      title: 'My habit',
      description: 'my description',
      goal: 5,
      progress: 0
    }]);

    const newState = reducer(state, action);

    expect(newState).toEqual([{
      _id: '12345a',
      title: 'My habit',
      description: 'my description',
      goal: 5,
      progress: 0
    }]);
  });
});
