export const ADD_DOG = 'ADD_DOG';
export const addDog = dog => ({
  type: ADD_DOG,
  payload: dog
});

export const UPDATE_DOG = 'UPDATE_DOG';
export const updateDog = (index, dog) => ({
  type: UPDATE_DOG,
  payload: {
    index,
    dog
  }
});

export const DELETE_DOG = 'DELETE_DOG';
export const deleteDog = index => ({
  type: DELETE_DOG,
  payload: index
});
