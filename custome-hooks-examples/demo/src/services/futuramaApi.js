export const findQuotes = () => {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes')
    .then(res => res.json())
    .then(quotes => quotes.map(quote => ({
      character: quote.character,
      image: quote.image,
      text: quote.quote
    })));
};
