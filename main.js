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
var giphy = {
    url: 'https://api.giphy.com/v1/gifs/trending',
    query: {
        api_key: '54452c59b31e4d14aca213ec76014baa',
        limit: 12
    }
};

// Update trending giphys
function update() {

    // Toggle refresh state
   $('#update .icon').toggleClass('d-none');

    // Call Giphy API
    $.get( giphy.url, giphy.query)

        // Success
        .done( function (res) {

            // Empty Element
            $('#giphys').empty();

            // Populate array of latest Giphys
            var latestGiphys = [];

            // Loop Giphys
            $.each( res.data, function (i, giphy) {
                // Add to latest Giphys
                latestGiphys.push(giphy.images.downsized_large.url);

                // Add Giphy HTML
                $('#giphys').prepend(
                    '<div class="col-sm-6 col-md-4 col-lg-3 p-1">' +
                        '<img class="w-100 img-fluid" src="' + giphy.images.downsized_large.url + '">' +
                    '</div>'
                );
            });

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
            $('#update .icon').toggleClass('d-none');
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
$('#cuisineDropdownDiv').click($('#cuisineDropdownDiv').dropdown('toggle'));

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



// const yelp = require('yelp-fusion');
// const client = yelp.client('GZmMnJq0xBxWdtHmpH4-ESYYsljhSHnRxGg6r_NbNkseB_8pHTkkmFvFOcAhB8bYGpZFadW1cGa_KEka02ThfDeqe-8GxwssWTXF2ZGP6g6XkmGXNu4XFpFjGi1UXnYx');

// client.search({
//   term: 'Four Barrel Coffee',
//   location: 'san francisco, ca',
// }).then(response => {
//   console.log(response.jsonBody.businesses[0].name);
// }).catch(e => {
//   console.log(e);
// });