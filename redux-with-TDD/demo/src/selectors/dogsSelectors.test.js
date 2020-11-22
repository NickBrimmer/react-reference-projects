import { getDogs, getDogByName, getDogsOverAge, getAverageDogAge } from './dogsSelectors';

describe('dogs selectors', () => {
  it('gets a list of dogs', () => {
    const state = [
      {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      }
    ];

    const dogs = getDogs(state);

    expect(dogs).toEqual([
      {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      }
    ]);
  });

  it('gets a dog by name', () => {
    const state = [
      {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      },
      {
        name: 'rover',
        age: 10,
        weight: '50 lbs'
      },
      {
        name: 'bingo',
        age: 2,
        weight: '10 lbs'
      }
    ];

    const dog = getDogByName(state, 'rover');

    expect(dog).toEqual({
      name: 'rover',
      age: 10,
      weight: '50 lbs'
    });
  });

  it('get all dogs older than an age', () => {
    const state = [
      {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      },
      {
        name: 'rover',
        age: 10,
        weight: '50 lbs'
      },
      {
        name: 'bingo',
        age: 2,
        weight: '10 lbs'
      }
    ];

    const oldDogs = getDogsOverAge(state, 4);

    expect(oldDogs).toEqual([
      {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      },
      {
        name: 'rover',
        age: 10,
        weight: '50 lbs'
      }
    ]);
  });

  it('gets the average dog age from state', () => {
    const state = [
      {
        name: 'spot',
        age: 5,
        weight: '20 lbs'
      },
      {
        name: 'rover',
        age: 10,
        weight: '50 lbs'
      },
      {
        name: 'bingo',
        age: 3,
        weight: '10 lbs'
      }
    ];

    const averageAge = getAverageDogAge(state);

    expect(averageAge).toEqual(6);
  });
});
