//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var northOrigin = -17.771954;
var westOrigin = 31.072450;

//Google Map Skin - Get more at http://snazzymaps.com/
var myOptions = {
    zoom: 16,
    center: new google.maps.LatLng(northOrigin, westOrigin),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: [
        {"elementType": "geometry", "stylers": [
            {"hue": "#ff4400"},
            {"saturation": -68},
            {"lightness": -4},
            {"gamma": 0.72}
        ]},
        {"featureType": "road", "elementType": "labels.icon"},
        {"featureType": "landscape.man_made", "elementType": "geometry", "stylers": [
            {"hue": "#0077ff"},
            {"gamma": 3.1}
        ]},
        {"featureType": "water", "stylers": [
            {"hue": "#00ccff"},
            {"gamma": 0.44},
            {"saturation": -33}
        ]},
        {"featureType": "poi.park", "stylers": [
            {"hue": "#44ff00"},
            {"saturation": -23}
        ]},
        {"featureType": "water", "elementType": "labels.text.fill", "stylers": [
            {"hue": "#007fff"},
            {"gamma": 0.77},
            {"saturation": 65},
            {"lightness": 99}
        ]},
        {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [
            {"gamma": 0.11},
            {"weight": 5.6},
            {"saturation": 99},
            {"hue": "#0091ff"},
            {"lightness": -86}
        ]},
        {"featureType": "transit.line", "elementType": "geometry", "stylers": [
            {"lightness": -48},
            {"hue": "#ff5e00"},
            {"gamma": 1.2},
            {"saturation": -23}
        ]},
        {"featureType": "transit", "elementType": "labels.text.stroke", "stylers": [
            {"saturation": -64},
            {"hue": "#ff9100"},
            {"lightness": 16},
            {"gamma": 0.47},
            {"weight": 2.7}
        ]}
    ]
};
var map = new google.maps.Map(document.getElementById('map'), myOptions);

// Add logo to map
// lat/long calculated with http://googlemapsapi.blogspot.co.uk/2007/05/v280-making-image-overlays-easy-with.html
var offset = 0.0068;

var southBound = northOrigin - (offset / 2);
var northBound = northOrigin + (offset / 2);

var westBound = westOrigin - (offset / 2);
var eastBound = westOrigin + (offset / 2);

var pointSW = new google.maps.LatLng(southBound, westBound);
var pointNE = new google.maps.LatLng(northBound, eastBound);

var groundOverlay = new google.maps.GroundOverlay(
    "img/planview.png",
    new google.maps.LatLngBounds(pointSW, pointNE));

groundOverlay.setMap(map);
