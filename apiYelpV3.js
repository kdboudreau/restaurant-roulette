// var Yelp = require('yelp-api-v3');

// var yelp = new Yelp({
//   app_id: 'issOlWgKrZBs98IHhmtVgA',
//   app_secret: 'GZmMnJq0xBxWdtHmpH4-ESYYsljhSHnRxGg6r_NbNkseB_8pHTkkmFvFOcAhB8bYGpZFadW1cGa_KEka02ThfDeqe-8GxwssWTXF2ZGP6g6XkmGXNu4XFpFjGi1UXnYx'
// });

// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md
// yelp.search({term: 'food', location: '33558', limit: 10})
// .then(function (data) {
//     console.log(data);
// })
// .catch(function (err) {
//     console.error(err);
// });

// // https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/autocomplete.md
// // yelp.autocomplete({text: 'Pizz', latitude: 40.71,longitude: 74.00}, callback)
// // .then(function (data) { console.log(data); })
// // .catch(function (err) { console.error(err);});

// // callbacks
// yelp.search({term: 'pizza', location: '33558', limit: 10}, function(err, data) {
//     if (err) {
//         return console.log(error);
//     }
//     console.log(data);
// });



var Yelp = require('yelpv3');

var yelp = new Yelp({
  app_id: 'issOlWgKrZBs98IHhmtVgA',
  app_secret: 'GZmMnJq0xBxWdtHmpH4-ESYYsljhSHnRxGg6r_NbNkseB_8pHTkkmFvFOcAhB8bYGpZFadW1cGa_KEka02ThfDeqe-8GxwssWTXF2ZGP6g6XkmGXNu4XFpFjGi1UXnYx'
});

// https://www.yelp.com/developers/documentation/v3/business_search
yelp.search({term: 'food', location: '90210', limit: 10})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.error(err);
});

// // https://www.yelp.com/developers/documentation/v3/business_search_phone
// yelp.phoneSearch({phone: '+14159083801'})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://www.yelp.com/developers/documentation/v3/transactions_search
// yelp.transactionSearch('delivery', {location: 'Boston'})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://www.yelp.com/developers/documentation/v3/business
// yelp.business('yuko-kitchen-los-angeles')
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://www.yelp.com/developers/documentation/v3/business_reviews
// yelp.reviews('yuko-kitchen-los-angeles')
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});

// // https://www.yelp.com/developers/documentation/v3/autocomplete
// yelp.autocomplete({text: 'Pizz', latitude: 40.71,longitude: 74.00})
// .then(function (data) { console.log(data); })
// .catch(function (err) { console.error(err);});