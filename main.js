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
var yelpOld = {
    url: 'https://api.yelp.com/v3/',
    api_key: 'GZmMnJq0xBxWdtHmpH4-ESYYsljhSHnRxGg6r_NbNkseB_8pHTkkmFvFOcAhB8bYGpZFadW1cGa_KEka02ThfDeqe-8GxwssWTXF2ZGP6g6XkmGXNu4XFpFjGi1UXnYx'
};

const yelp = require('yelp-fusion');
var config = require('./config');
const apiKey = config.getApiKey();

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

// Update trending giphys
function update() {
    // Toggle refresh state
   $('#update .icon').toggleClass('d-none');

    client.search(searchRequest)
    .then(response => {
        const length = response.jsonBody.businesses.length;
        const index = Math.floor((Math.random() * length) + 1);
        const randomResult = response.jsonBody.businesses[index];
        const prettyRandomJson = JSON.stringify(randomResult, null, 4);
        $(".selected-eatery").html(randomResult.name);
        console.log(randomResult.name);
    }).catch(e => {
        console.log(e);
    });

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

        // // Failure
        // .fail(function(){
        //     $('.alert').slideDown();
        //     setTimeout( function() { $('.alert').slideUp() }, 2000);
        // })

        // Complete
        // .always(function() {
        //     // Re-Toggle refresh state
        //     // $('#update .icon').toggleClass('d-none');
        // });

    // Prevent submission if originates from click
    return false;
}

// Manual refresh
$('#update a').click(update);

update();


$('.food-filters').hide();
$('.selected-eatery').hide();

$('.filter-buttons > .ui-btn').click(toggleFilterBtns);

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

function toggleDropdown(element) {
    //TODO check class of component with id = element
    //then toggle dropdown
}

function spinTheWheel() {
    $('.selected-eatery').hide();
    $('.spinner-icon').addClass("clicked");
    setTimeout(function() {
        $('.spinner-icon').removeClass("clicked");
        $('.selected-eatery').show();
    }, 800);
}
