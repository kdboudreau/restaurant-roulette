// // PWA enhancement
// if (navigator.serviceWorker) {
//     //Register SW
//     navigator.serviceWorker.register('sw.js').catch(console.error);

//     // Giphy cache clean
//     function giphyCacheClean(giphys) {
//         // Get service worker registration
//         navigator.serviceWorker.getRegistration().then(function(reg) {
//             // Only post message to active SW
//             if (reg.active) reg.active.postMessage({ action: 'cleanGiphyCache', giphys: giphys });
//         })
//     }
// }

// Giphy API object
var yelp = {
    url: 'https://api.yelp.com/v3/',
    api_key: 'GZmMnJq0xBxWdtHmpH4-ESYYsljhSHnRxGg6r_NbNkseB_8pHTkkmFvFOcAhB8bYGpZFadW1cGa_KEka02ThfDeqe-8GxwssWTXF2ZGP6g6XkmGXNu4XFpFjGi1UXnYx'
};

// Update trending giphys
function update() {

    // Toggle refresh state
   $('#update .icon').toggleClass('d-none');

    // Call Giphy API
    $.get( yelp.url, yelp.api_key)

        // Success
        .done( function (res) {
            console.log("did it!");
            // Empty Element
            // $('#giphys').empty();

            // Populate array of latest Giphys
            // var latestGiphys = [];

            // Loop Giphys
            // $.each( res.data, function (i, giphy) {
                // Add to latest Giphys
                // latestGiphys.push(giphy.images.downsized_large.url);

                // Add Giphy HTML
                // $('#giphys').prepend(
                //     '<div class="col-sm-6 col-md-4 col-lg-3 p-1">' +
                //         '<img class="w-100 img-fluid" src="' + giphy.images.downsized_large.url + '">' +
                //     '</div>'
                // );
            // });

            // Inform the SW (if available) of current Giphys
            // if (navigator.serviceWorker) giphyCacheClean(latestGiphys);
        })

        // Failure
        .fail(function(){
            
            $('.alert').slideDown();
            setTimeout( function() { $('.alert').slideUp() }, 2000);
        })

        // Complete
        .always(function() {

            // Re-Toggle refresh state
            // $('#update .icon').toggleClass('d-none');
        });

    // Prevent submission if originates from click
    return false;
}

// Manual refresh
$('#update a').click(update);

// Update trending giphys on load
update();




$('.food-filters').hide();
$('.selected-eatery').hide();

$('.ui-btn.ui-filter').click(toggleFilterBtns);

function toggleFilterBtns() {
    if ($('.food-filters').is(':visible')) {
        $('.food-filters').hide();
        $('.filter-buttons :first-child').addClass('ui-btn-a').removeClass('ui-btn-b');
        $('.filter-buttons :nth-child(2)').addClass('ui-btn-b').removeClass('ui-btn-a');
    } else {
        $('.filter-buttons :first-child').addClass('ui-btn-b').removeClass('ui-btn-a');
        $('.filter-buttons :nth-child(2)').addClass('ui-btn-a').removeClass('ui-btn-b');
        $('.food-filters').show();
    }
}

function spinTheWheel() {
    $('.selected-eatery').hide();
    $('.spinner-icon').addClass("clicked");
    setTimeout(function() {
        $('.spinner-icon').removeClass("clicked");
        $('.selected-eatery').show();
    }, 800);
}


var Yelp = require('yelp-api-v3');

var yelp = new Yelp({
  app_id: 'issOlWgKrZBs98IHhmtVgA',
  app_secret: 'GZmMnJq0xBxWdtHmpH4-ESYYsljhSHnRxGg6r_NbNkseB_8pHTkkmFvFOcAhB8bYGpZFadW1cGa_KEka02ThfDeqe-8GxwssWTXF2ZGP6g6XkmGXNu4XFpFjGi1UXnYx'
});

// https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/businesses-search.md
yelp.search({term: 'food', location: '90210', price: '1,2,3', limit: 10})
.then(function (data) {
    console.log(data);
})
.catch(function (err) {
    console.error(err);
});

// https://github.com/Yelp/yelp-api-v3/blob/master/docs/api-references/autocomplete.md
yelp.autocomplete({text: 'Pizz', latitude: 40.71,longitude: 74.00}, callback)
.then(function (data) { console.log(data); })
.catch(function (err) { console.error(err);});

// callbacks
yelp.search({term: 'food', location: '90210', limit: 10}, function(err, data) {
    if (err) {
        return console.log(error);
    }
    console.log(data);
});