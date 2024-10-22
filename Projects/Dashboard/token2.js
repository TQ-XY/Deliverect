
const url = 'https://api.deliverect.com/oauth/token';
const options = {
  method: 'POST',
  headers: { accept: 'application/json', 'content-type': 'application/json' },
  body: JSON.stringify({
    audience: 'https://api.deliverect.com',
    grant_type: 'token',
    client_id: '1t6ESpWYR7QJmnVl',
    client_secret: '8PjcmWktjrIdUQ7TBwzKSDvGyTLlsWOR',
  }),
};

fetch(url, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
