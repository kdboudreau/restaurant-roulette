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

const yelpApi = require('apiYelpFusion');

function update() {
    // Toggle refresh state
   $('#update .icon').toggleClass('d-none');

    // client.search(searchRequest)
    // .then(response => {
    //     const length = response.jsonBody.businesses.length;
    //     const index = Math.floor((Math.random() * length) + 1);
    //     const randomResult = response.jsonBody.businesses[index];
    //     const prettyRandomJson = JSON.stringify(randomResult, null, 4);
    //     $(".selected-eatery").html(randomResult.name);
    //     console.log(randomResult.name);
    // }).catch(e => {
    //     console.log(e);
    // });
    yelpApi.updateApi();

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
