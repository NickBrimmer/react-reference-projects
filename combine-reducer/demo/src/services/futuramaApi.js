export const fetchQuote = character => {
  return fetch(`http://futuramaapi.herokuapp.com/api/characters/${character}/1`)
    .then(res => res.json())
    .then(([quote]) => ({
      character: quote.character,
      image: quote.image,
      text: quote.quote
    }));
};
