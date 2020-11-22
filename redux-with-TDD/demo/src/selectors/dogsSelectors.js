// const getSomeData = (state) => state.someThing
// const getSomeData = (state) => state
// const getSomeData = (state) => state.reduce()

export const getDogs = state => state;

export const getDogByName = (state, name) => 
  getDogs(state).find(dog => dog.name === name);

export const getDogsOverAge = (state, age) =>
  getDogs(state).filter(dog => dog.age > age);

export const getAverageDogAge = state =>
  getDogs(state)
    .reduce((acc, dog) => acc + dog.age, 0) / getDogs(state).length;
