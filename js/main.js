(function ($) {
"use strict";
//preloader
$(window).on('load', function() {
	$('.preload_body').delay(1000).fadeOut(1000);
})


// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.main-menu',
	meanScreenWidth: "767"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});
jQuery('.main-menu nav ul').superfish();
//meanmenu btn when viewport is 767px
$('.meanmenu-reveal').on('click', function() {
	$('.header_btn_a').toggleClass('.header_btn_resposive')
})


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

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
// $("[data-contain]").each(function(){
// 	$(this).css("background-contain", $(this).attr("data-contain"));
// })

// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	//navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:false,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:3
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

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


})(jQuery);