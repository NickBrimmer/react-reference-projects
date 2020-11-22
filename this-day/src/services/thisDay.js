export const fetchThisDay = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://history.muffinlabs.com/date', {
    headers: {
      origin: null
    }
  })
    .then(res => res.json())
    .then(({ data }) => ({
      events: data.Events,
      births: data.Births,
      deaths: data.Deaths
    }));
};
