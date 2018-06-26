const nodeFetch = require('node-fetch');

function fetch(url, options = {}) {
  const method = options.method ? options.method : 'GET';
  console.log(`"${method} ${url}"`);
  
  return nodeFetch(url, options)
    .then(response => response.json())
    .then(json => json.result);
}

module.exports = fetch;
