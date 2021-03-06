var Yelp = require('yelp');

// var yelp = new Yelp({
//   consumer_key: 'consumer-key',
//   consumer_secret: 'consumer-secret',
//   token: 'token',
//   token_secret: 'token-secret',
// });

var yelp = new Yelp({
    app_id: 'issOlWgKrZBs98IHhmtVgA',
    app_secret: 'GZmMnJq0xBxWdtHmpH4-ESYYsljhSHnRxGg6r_NbNkseB_8pHTkkmFvFOcAhB8bYGpZFadW1cGa_KEka02ThfDeqe-8GxwssWTXF2ZGP6g6XkmGXNu4XFpFjGi1UXnYx'
  });

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business('yelp-san-francisco')
  .then(console.log)
  .catch(console.error);

yelp.phoneSearch({ phone: '+15555555555' })
  .then(console.log)
  .catch(console.error);

// A callback based API is also available:
yelp.business('yelp-san-francisco', function(err, data) {
  if (err) return console.log(error);
  console.log(data);
});