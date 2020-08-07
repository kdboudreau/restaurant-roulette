const yelp = require('yelp-fusion');
var config = require('./config');
const apiKey = config.getApiKey();

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  const length = response.jsonBody.businesses.length;
  const index = Math.floor((Math.random() * length) + 1);
  const randomResult = response.jsonBody.businesses[index];
  const prettyRandomJson = JSON.stringify(randomResult, null, 4);
  console.log(randomResult.name);
}).catch(e => {
  console.log(e);
});