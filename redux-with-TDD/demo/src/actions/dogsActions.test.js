import { addDog, ADD_DOG, updateDog, UPDATE_DOG, deleteDog, DELETE_DOG } from './dogsActions';

describe('dogs actions', () => {
  it('creates an ADD_DOG action', () => {
    const action = addDog({
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    });

    expect(action).toEqual({
      type: ADD_DOG,
      payload: {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      }
    });
  });

  it('creates an UPDATE_DOG action', () => {
    const action = updateDog(1, {
      name: 'spot',
      age: 6,
      weight: '20 lbs'
    });

    expect(action).toEqual({
      type: UPDATE_DOG,
      payload: {
        index: 1,
        dog: {
          name: 'spot',
          age: 6,
          weight: '20 lbs'
        }
      }
    });
  });

  it('creates a DELETE_DOG action', () => {
    const action = deleteDog(12);

    expect(action).toEqual({
      type: DELETE_DOG,
      payload: 12
    });
  });
});
