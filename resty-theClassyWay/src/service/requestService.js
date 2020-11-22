const NO_BODY_METHODS = ['GET', 'DELETE'];

export const requestService = (url, method, body) => {
  return fetch(url, {
    method,
    headers: NO_BODY_METHODS.includes(method) ? {} : { 'Content-Type': 'application/json' },
    body: NO_BODY_METHODS.includes(method) ? null : body
  })
    .then(res => res.json());
};
