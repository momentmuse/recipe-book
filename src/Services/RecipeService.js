import axios from 'axios';

const buildQuery = searchArray => {
  // API is not configured for CORS, so I spun up a cors-anywhere server on heroku to serve as proxy
  const proxyUrl = 'https://stark-taiga-49462.herokuapp.com/';
  const api = `http://www.recipepuppy.com/api/?i=`;
  return proxyUrl + api + searchArray.join(',');
};

const getAll = searchArray => {
  const request = axios.get(buildQuery(searchArray));
  return request.then(response => response.data);
};

export default { getAll };
