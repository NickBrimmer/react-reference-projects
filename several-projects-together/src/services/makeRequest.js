const BODY_METHODS = ['POST', 'PATCH', 'PUT'];
const getConfig = (method, body = null) => ({
  method,
  headers: BODY_METHODS.includes(method) ? { 'Content-Type' : 'application/json' } : {},
  body: BODY_METHODS.includes(method) ? body : null
});

export const makeRequest = (url, method, body = null) => {
  return fetch(url, getConfig(method, body))
    .then(res => res.json());
};
