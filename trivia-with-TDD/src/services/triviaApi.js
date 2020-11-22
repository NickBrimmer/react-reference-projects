export const fetchQuestions = () => {
  return fetch('https://opentdb.com/api.php?amount=10')
    .then(res => res.json())
    .then(json => json.results);
};
