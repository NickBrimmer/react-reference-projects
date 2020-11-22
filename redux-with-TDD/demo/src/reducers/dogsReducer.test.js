import { addDog, updateDog, deleteDog } from '../actions/dogsActions';
import reducer from './dogsReducer';

describe('dogs reducer', () => {
  it('handle the ADD_DOG action', () => {
    const state = [];
    const action = addDog({
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      }
    ]);
  });

  it('handle the UPDATE_DOG action', () => {
    const state = [
      {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      }
    ];

    const action = updateDog(0, {
      name: 'rover',
      age: 10,
      weight: '50 lbs'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        name: 'rover',
        age: 10,
        weight: '50 lbs'
      }
    ]);
  });

  it('handles the DELETE_DOG action', () => {
    const state = [
      {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      }
    ];

    const action = deleteDog(0);

    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });
});
