$(document).ready(function() {
	// VARIABLES
	var ieLtNine		= ($.browser.msie && jQuery.browser.version.substring(0, 2) < 9);
	var ieLtEight		= ($.browser.msie && jQuery.browser.version.substring(0, 2) < 8);
	var iosDevice 		= /(iPhone|iPod|iPad)/i.test(navigator.userAgent);
	var iosOne 			= /CPU like Mac OS X/i.test(navigator.userAgent);
	var iosTwoThree     = /OS [2-3]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent);
	var width 			= $(window).width();
	var height 			= $(window).height();
	var cutoff_height	= 550;
	var cutoff_width 	= 700;
	var toggle_fixed_nav= false;
	var max_width 		= 500;
	var allowHomeMenu 	= true;
	var wrapWidth 		= $('#wrapper').width();
	var circDieSize 	= 20;
	// ABOUT circle.
	var topDown68	= height * 0.1111;
	var height68	= height * 0.7083;
	var width68 	= wrapWidth * 0.5368;
	var diameter68 	= height68;
	if ( diameter68 > width68 ) {
		diameter68 	= width68;
		topDown68 	= ( height - diameter68 ) * 0.5;
	}
	var radius68 	= diameter68 * 0.5;
	var max68 		= 'none';
	var rightLeft68	= 0;
	if ( diameter68 < (wrapWidth * 0.5368) ) {
		rightLeft68 = ((wrapWidth * 0.5368) - diameter68 ) * 0.5;
	}
	// WORK circle.
	var topDown69	= height * 0.1944;
	var height69	= height * 0.5555;
	var width69 	= wrapWidth * 0.4210;
	var diameter69 	= height69;
	if ( diameter69 > width69 ) {
		diameter69 = width69;
		topDown69 	= ( height - diameter69 ) * 0.52;
	}
	var radius69 	= diameter69 * 0.5;
	var max69 		= 'none';
	var rightLeft69	= 0;
	if ( diameter69 < (wrapWidth * 0.4210) ) {
		rightLeft69 = ((wrapWidth * 0.4210) - diameter69 ) * 0.5;
	}

	// Remove hover styling class if touch event is detected.
	// Used for specific elements - site-wide.
	if ('ontouchstart' in document && !iosDevice) {
	    $('header').removeClass('no-touch');
	}

	// FUNCTION CALLS
	setHomeHeight(width, height);

	// FUNCTIONS
	// Set margin-top placement of home menu items 
	// based on page height.
	function setHomeHeight(width, height) {
		// Larger screen width.
		if ( width >= 700 ) {
			// Set margin-top of menu / logo to 44%
			// of page height.
			var marginTop 	= height * 0.44;
			if ( allowHomeMenu ) {
				allowHomeMenu = false;
				$('.home header h1, .home header nav').animate({
					'margin-top' : marginTop
				}, 1000, 'easeOutCirc');
			}
			else {
				$('.home header h1, .home header nav').css({
					'margin-top' : marginTop
				});
			}
			if ( !ieLtEight ) {
				placeHomeCircles(width, height);
			}
		}
		else {
			// Return to <700 screen size values.
			$('.home header h1').css({'margin-top':65});
			$('.home header nav').css({'margin-top':0});
			if ( !ieLtEight ) {
				setHomeCircles(width);
			}
		}
	}
	// Dynamically create Home page circle sizes
	// and placement on the page.
	function placeHomeCircles(width, height) {
		// Shared values.
		rightLeft	= width * 0;
		wrapWidth 	= $('#wrapper').width();
		// ABOUT circle.
		topDown68	= height * 0.1111;
		height68	= height * 0.7083;
		width68 	= wrapWidth * 0.5368;
		diameter68 	= height68;
		if ( diameter68 > width68 ) {
			diameter68 	= width68;
			topDown68 	= ( height - diameter68 ) * 0.5;
		}
		radius68 	= diameter68 * 0.5;
		if ( diameter68 < (wrapWidth * 0.5368) ) {
			rightLeft68 = ((wrapWidth * 0.5368) - diameter68 ) * 0.5;
		}
		// WORK circle.
		topDown69	= height * 0.1944;
		height69	= height * 0.5555;
		width69 	= wrapWidth * 0.4210;
		diameter69 	= height69;
		if ( diameter69 > width69 ) {
			diameter69 = width69;
			topDown69 	= ( height - diameter69 ) * 0.52;
		}
		radius69 	= diameter69 * 0.5;
		if ( diameter69 < (wrapWidth * 0.4210) ) {
			rightLeft69 = ((wrapWidth * 0.4210) - diameter69 ) * 0.5;
		}
		// Browser is IE < 9
		if ( ieLtNine ) {
			rightLeft68 = 0;
			rightLeft69 = 0;
		}
		// Reset values based on page size.
		$('.home .menu_bgs .bg_68').css({
			'max-width'		: max68,
			'max-height' 	: max68,
			'width'			: diameter68,
			'height' 		: diameter68,
			'-webkit-border-radius'	: radius68,
			'-moz-border-radius'	: radius68,
			'-o-border-radius'		: radius68,
			'border-radius'	: radius68,
			'top' 			: topDown68,
			'left' 			: 'auto',
			'right'			: rightLeft68
		});
		$('.home .menu_bgs .bg_69').css({
			'max-width'		: max69,
			'max-height' 	: max69,
			'width'			: diameter69,
			'height' 		: diameter69,
			'-webkit-border-radius'	: radius69,
			'-moz-border-radius'	: radius69,
			'-o-border-radius'		: radius69,
			'border-radius'	: radius69,
			'top' 			: topDown69,
			'right'			: rightLeft69
		});
	};
	// Set diameter of circles (on menu item hover)
	// based on detected browser width. Only used for
	// screens <700px wide.

	var width_68 		= width;
	var width_69 		= width;
	var vert_off_68 = width_68 * -0.25;
	var vert_off_69 = width_69 * -0.25;
	var radius_68		= width_68 * 0.5;
	var radius_69		= width_69 * 0.5;

	function setHomeCircles(width) {
		width_68 		= width;
		width_69 		= width;
		vert_off_68 = width_68 * -0.25;
		vert_off_69 = width_69 * -0.25;
		if ( iosDevice ) {
			if ( iosOne || iosTwoThree ) {
				$('.home header nav ul li').css({
					'padding' : '10px 21px 10px 21px'
				});
			}
		}
		if ( width < 315 ) {
			$('.home .menu_bgs .bg_68').css({
				'left'		: 0
			});
			$('.home .menu_bgs .bg_69').css({
				'right'		: 0
			});
		}
		else if ( width >= 315 && width < 425 ) {
			width_68 	= width * 0.9;
			width_69 	= width * 0.85;
			vert_off_68 = width_68 * -0.2;
			vert_off_69 = width_69 * -0.2;
			$('.home .menu_bgs .bg_68').css({
				'left'		: '2%'
			});
			$('.home .menu_bgs .bg_69').css({
				'right'		: '5%'
			});
		}
		else if ( width >= 425 && width < 560 ) {
			width_68 	= width * 0.9;
			width_69 	= width * 0.85;
			vert_off_68 = width_68 * -0.3;
			vert_off_69 = width_69 * -0.3;
			$('.home .menu_bgs .bg_68').css({
				'left'		: '2%'
			});
			$('.home .menu_bgs .bg_69').css({
				'right'		: '5%'
			});
		}
		else if ( width >= 560 ) {
			width_68 	= width * 0.9;
			width_69 	= width * 0.85;
			vert_off_68 = width_68 * -0.3;
			vert_off_69 = width_69 * -0.3;
			$('.home .menu_bgs .bg_68').css({
				'left'		: '2%'
			});
			$('.home .menu_bgs .bg_69').css({
				'right'		: '5%'
			});
		}
		radius_68		= width_68 * 0.5;
		radius_69		= width_69 * 0.5;
		$('.home .menu_bgs .bg_68').css({
			'width'			: width_68,
			'height' 		: width_68,
			'-webkit-border-radius'	: radius_68,
			'-moz-border-radius'	: radius_68,
			'-o-border-radius'		: radius_68,
			'border-radius'	: radius_68,
			'top' 			: vert_off_68
		});
		$('.home .menu_bgs .bg_69').css({
			'width'			: width_69,
			'height' 		: width_69,
			'-webkit-border-radius'	: radius_69,
			'-moz-border-radius'	: radius_69,
			'-o-border-radius'		: radius_69,
			'border-radius'	: radius_69,
			'top' 			: vert_off_69
		});
	};
	function openHomeSubMenu(show) {
		var menu 		= '#menu-home-nav li.menu-item-' + show + ' ul.sub-menu';
		var circle 		= '.home .menu_bgs .bg_' + show;
		if ( !ieLtEight ) {
			if ( width > 700 ) {
				var menuPosLft	= $('#menu-item-' + show + ' a').offset().left;
				var menuPosTop = $('#menu-item-' + show + ' a').offset().top;
				//console.log(aboutPosLft);
				var menuPosRt  = wrapWidth - (menuPosLft - ((width - wrapWidth) * 0.5)) - 30;	
				$(circle).stop(true,true).css({
					'width'			: circDieSize,
					'height' 		: circDieSize,
					'top' 			: menuPosTop,
					'right' 		: menuPosRt,
					'opacity' 		: 0
				}).show();
				if ( show < 69 ) {
					$(circle).stop(true,true).delay(5).animate({
						'width'			: (diameter68 * 1.05),
						'height' 		: (diameter68 * 1.05),
						'top' 			: (topDown68 * 0.975),
						'right'			: (rightLeft68 - (diameter68 * 0.025)),
						'opacity'		: 1
					}, 500, 'easeInOutCirc', function(){
						$(circle).stop(true,true).delay(5).animate({
							'width'			: diameter68,
							'height' 		: diameter68,
							'top' 			: topDown68,
							'right'			: rightLeft68
						}, 200);
					});
				}
				else {
					$(circle).stop(true,true).delay(5).animate({
						'width'			: (diameter69 * 1.05),
						'height' 		: (diameter69 * 1.05),
						'top' 			: (topDown69 * 0.975),
						'right'			: (rightLeft69 - (diameter69 * 0.025)),
						'opacity'		: 1
					}, 500, 'easeInOutCirc', function(){
						$(circle).stop(true,true).delay(5).animate({
							'width'			: diameter69,
							'height' 		: diameter69,
							'top' 			: topDown69,
							'right'			: rightLeft69
						}, 200);
					});
				}
			}
			else {
				setHomeCircles(width);
				$(circle).stop(true, true).css({
					'opacity' : 1
				}).hide(0).delay(5).fadeIn(800);
			}
			$(menu).stop(true, true).delay(400).fadeIn(800);
		}
		else {
			$(menu).stop(true,true).slideDown(400);
		}
	};
	function closeHomeSubMenu(hide) {
		var menu 	= '#menu-home-nav li.menu-item-' + hide + ' ul.sub-menu';
		var circle 	= '.home .menu_bgs .bg_' + hide;
		if ( !ieLtEight ) {
			if ( width > 700 ) {
				var menuPosLft	= $('#menu-item-' + hide + ' a').offset().left;
				var menuPosTop = $('#menu-item-' + hide + ' a').offset().top;
				var menuPosRt  = wrapWidth - (menuPosLft - ((width - wrapWidth) * 0.5)) - 30;
				$(circle).stop(true,true).animate({
					'width'			: circDieSize,
					'height' 		: circDieSize,
					'top' 			: menuPosTop,
					'right' 		: menuPosRt,
					'opacity' 		: 0
				});
			}
			else {
				$(circle).stop(true, true).fadeOut(400);
			}
			$(menu).stop(true, true).fadeOut(300);
		}
		else {
			$(menu).stop(true,true).slideUp(300);
		}
	};

	// EVENTS
	$(window).resize(function() {
		width = $(window).width();
		height = $(window).height();
		setHomeHeight(width, height);
	});
	if ( $('header').hasClass('no-touch') ){
		$('#menu-home-nav li.menu-item-type-custom').hover(function(){
			var id	= $(this).attr('id');
			id 		= id.slice(10);
			openHomeSubMenu(id);
		},function(){
			var id	= $(this).attr('id');
			id 		= id.slice(10);
			closeHomeSubMenu(id);
		});
	}
	else {
		$('#menu-home-nav li.menu-item-type-custom').click(function(){
			var id	= $(this).attr('id');
			id 		= id.slice(10);
			if( id > 68 ) {
				closeHomeSubMenu(68);
			}
			else{
				closeHomeSubMenu(69);
			}
			openHomeSubMenu(id);
		});
	}
});