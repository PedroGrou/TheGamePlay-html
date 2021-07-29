( function( $ ) {
	'use strict';

	var $mainNav   = $( '.navigation' );
	var $mobileNav = $( '#mobilemenu' );

	$mainNav.clone().removeAttr( 'id' ).removeClass().appendTo( $mobileNav );
	$mobileNav.find( 'li' ).removeAttr( 'id' );

	$mobileNav.mmenu({
		offCanvas: {
			position: 'top',
			zposition: 'front'
		}
	});

	$mainNav.superfish({
		delay: 300,
		animation: { opacity: 'show', height: 'show' },
		speed: 'fast',
		dropShadows: false
	});

	$( 'body' ).fitVids();

	$( '.lightbox' ).fancybox();

	$( '.sidebar' ).find( '.widget').each( function() {
		var h3 = $(this).find('h3');
		var h3html = $(this).find('h3').html();
		if ( h3html !== null ) {
			h3.nextAll().wrapAll('<div class="widget-content" />');
		}
		else {
			$(this).wrapInner('<div class="widget-content" />');
		}
	});


	$( window ).on( 'load', function() {

		var homeSlider = $( '.home-slider' );

		if ( homeSlider.length ) {
			var animation      = homeSlider.data( 'animation' ),
					direction      = homeSlider.data( 'direction' ),
					slideshow      = homeSlider.data( 'slideshow' ),
					slideshowSpeed = homeSlider.data( 'slideshowSpeed' ),
					animationSpeed = homeSlider.data( 'animationSpeed' );

			homeSlider.flexslider({
				animation     : animation,
				direction     : direction,
				slideshow     : slideshow,
				slideshowSpeed: slideshowSpeed,
				animationSpeed: animationSpeed,
				namespace: 'ci-',
				prevText: '',
				nextText: '',
				directionNav: false,
				manualControls: '.home-slider-nav li',
				start: function( slider ) {
					slider.removeClass( 'loading' );
				}
			});
		}
	});

})( jQuery );
