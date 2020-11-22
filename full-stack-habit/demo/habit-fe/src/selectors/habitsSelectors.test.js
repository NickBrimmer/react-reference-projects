import { getHabits } from './habitsSelectors';

describe('habits selectors', () => {
  it('selects all habits from state', () => {
    const state = {
      habits: [
        { title: 'my habit', goal: 5 },
        { title: 'another habit', goal: 10 }
      ]
    };

    const habits = getHabits(state);

    expect(habits).toEqual([
      { title: 'my habit', goal: 5 },
      { title: 'another habit', goal: 10 }
    ]);
  });
});
