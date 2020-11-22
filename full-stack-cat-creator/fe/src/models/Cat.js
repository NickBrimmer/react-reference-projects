export const create = cat => {
  return fetch('http://localhost:7890/api/v1/cats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cat)
  })
    .then(res => res.json());
};

export const find = () => {
  return fetch('http://localhost:7890/api/v1/cats')
    .then(res => res.json());
};
