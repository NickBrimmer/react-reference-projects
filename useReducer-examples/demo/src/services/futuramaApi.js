export const fetchQuote = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(([quote]) => ({
      character: quote.character,
      image: quote.image,
      text: quote.quote
    }));
};
