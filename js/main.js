(function ($) {
"use strict";
//preloader
$(window).on('load', function() {
	$('.preload_body').delay(1000).fadeOut(1000);
})


// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});


//meanmenu btn when viewport is 767px
// $('.meanmenu-reveal').on('click', function() {
// 	$('.header_btn_a').toggleClass('.header_btn_resposive')
// })


// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//scrolling opacity
// var animation_start_pos = 1000, animation_end_pos = 2000; //where you want the animation to stop

// $(document).scroll(function() {
//     var scroll_pos = $(this).scrollTop(); 
//         var percentScrolled = parseFloat(scroll_pos/animation_end_pos);
//         jQuery('.people-opacity').css('opacity',  percentScrolled );
// });


// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// data background
$("[data-background]").each(function(){
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
});

/* magnificPopup img view */


/* magnificPopup video view */
$(document).ready(function(){
	$('.popup-video').venobox({
		spinner:'wave',
		bgcolor: '#1696e7'
	}); 
});


// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


//counter Up
$('.counter_head').counterUp({
	delay: 100,
	time: 2000
});

//elevaty js
$("#zoom_01").elevateZoom(); 
$("#zoom_02").elevateZoom(); 
$("#zoom_03").elevateZoom({
	zoomWindowPosition: 10
}); 
$("#zoom_04").elevateZoom({
	zoomWindowPosition:10
});
 
 $("#z03").elevateZoom({
	zoomWindowPosition:1
});



//yt player
jQuery("#bgndVideo").YTPlayer();

// countdown
$('[data-countdown]').each(function () {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function (event) {
		$this.html(event.strftime('<div class="time-count">%D <span>days</span></div><div class="time-count">%H <span>hour</span></div><div class="time-count">%M <span>minute</span></div><div class="time-count">%S <span>Second</span></div>'));
	});
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 1700, // Speed back to top (ms)
	animation: 'slide', // Fade, slide, none
	animationInSpeed: 1700, // Animation in speed (ms)
	animationOutSpeed: 1700, // Animation out speed (ms)
	scrollText: '<i class="fa fa-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
//slick slider
$('.testimonial_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.testimonial_img'
});
$('.testimonial_img').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial_slide',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
	arrows: false,
	centerPadding: '0px',
});
//owl carousel
$('.brand_logo').owlCarousel({
	loop:true,
	margin:30,
	nav:false,
	responsive:{
			0:{
					items:1,
					margin:4,
			},
			600:{
					items:3
			},
			1000:{
					items:3
			}
	}
})
// WOW active
new WOW().init();
// maps

function basicmap() {

	// Basic options for a simple Google Map

	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	var mapOptions = {

		// How zoomed in you want the map to start at (always required)

		zoom: 11,

		scrollwheel: false,

		// The latitude and longitude to center the map (always required)

		center: new google.maps.LatLng(27.759597802019293, -82.65111933855246), // New York

		// This is where you would paste any style found on Snazzy Maps.

		styles:[
			{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
							{
									"color": "#ffffff"
							}
					]
			},
			{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
							{
									"color": "#000000"
							},
							{
									"lightness": 13
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"color": "#000000"
							}
					]
			},
			{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"color": "#144b53"
							},
							{
									"lightness": 14
							},
							{
									"weight": 1.4
							}
					]
			},
			{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
							{
									"color": "#08304b"
							}
					]
			},
			{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#0c4152"
							},
							{
									"lightness": 5
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"color": "#000000"
							}
					]
			},
			{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"color": "#0b434f"
							},
							{
									"lightness": 25
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "geometry.fill",
					"stylers": [
							{
									"color": "#000000"
							}
					]
			},
			{
					"featureType": "road.arterial",
					"elementType": "geometry.stroke",
					"stylers": [
							{
									"color": "#0b3d51"
							},
							{
									"lightness": 16
							}
					]
			},
			{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
							{
									"color": "#000000"
							}
					]
			},
			{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
							{
									"color": "#146474"
							}
					]
			},
			{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
							{
									"color": "#021019"
							}
					]
			}
	]

	};

	// Get the HTML DOM element that will contain your map

	// We are using a div with id="map" seen below in the <body>

	var mapElement = document.getElementById('contact-map');



	// Create the Google Map using our element and options defined above

	var map = new google.maps.Map(mapElement, mapOptions);



	// Let's also add a marker while we're at it

	var marker = new google.maps.Marker({

		position: new google.maps.LatLng(27.759597802019293, -82.65111933855246),

		map: map,

		title: 'Cryptox'

	});

}

if ($('#contact-map').length != 0) {

	google.maps.event.addDomListener(window, 'load', basicmap);

}


})(jQuery);