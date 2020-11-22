export const fetchCats = () => {
  return fetch('https://api.thecatapi.com/v1/images/search?limit=5&size=small')
    .then(res => res.json())
    .then(json => json.map(({ url }) => url));
};

export const fetchDogs = () => {
  return fetch('https://dog.ceo/api/breeds/image/random/5')
    .then(res => res.json())
    .then(json => json.message);
};
