export const fetchCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      name: character.name,
      image: character.photoUrl
    })));
};
