const request = require('request');
const search = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${search}`, function (error, response, body) {
  const data = JSON.parse(body);
  console.log(data[0].description);
  console.log(search);
});