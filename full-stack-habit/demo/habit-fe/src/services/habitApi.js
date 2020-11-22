export const postHabit = habit => {
  return fetch(`${process.env.API_URL}/api/v1/habits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(habit)
  })
    .then(res => res.json());
};

export const fetchHabits = () => {
  return fetch(`${process.env.API_URL}/api/v1/habits`)
    .then(res => res.json());
};
