// Add-in no-touch class by default.
$('body').addClass('no-touch');

$(document).ready(function(){

	function defaultHomeMenu(menus){
		console.log('default');
		var $sub = $('.home header nav li.menu-item ul.sub-menu.show');
		if( !menus ){
			menus = [68,69];
		}
		var length = menus.length;
		var i = 0;
		while ( i < length ){
			var $bg = $('.home .menu_bgs .bg_' + menus[i]);
			var $menu = $('#menu-item-' + menus[i]);
			$bg.css({
				'width' : 0,
				'height' : 0,
				'top' : 5,
				'left' : $menu.offset().left+30
			});
			i++;
		}
		$sub.removeClass('show');
	}

	function openHomeMenu(num){
		closeHomeMenu();
		var $menu = $('.home .menu_bgs .bg_' + num);
		//var $open = $('.home .menu_bgs .bg_' + num + '.open');
		var $sub = $('.home header nav li.menu-item-' + num + ' ul.sub-menu');
		var pageWide = $(document).width();
		var bgWide = pageWide * 0.95;
		var bgFromLft = pageWide * 0.01;
		if(num > 68){
			bgWide = pageWide * 0.9;
			bgFromLft = pageWide * 0.08;
		}
		var bgFromTop = bgWide * -0.25;

		$menu.css({
			'width' : bgWide * 1.1,
			'height' : bgWide * 1.1,
			'top' : bgFromTop * 1.05,
			'left' : bgFromLft * 1.05
		}).addClass('open');
		var $open = $('.home .menu_bgs .bg_' + num + '.open');
		$open.css({
			'width' : bgWide,
			'height' : bgWide,
			'top' : bgFromTop,
			'left' : bgFromLft
		});

		$sub.addClass('show');
	}

	function closeHomeMenu(){
		var $menu = $('.home .menu_bgs .menu_bg');
		var $sub = $('.home header nav li.menu-item ul.sub-menu.show');
		$menu.each(function(){
			$(this).removeClass('open');
		});
		defaultHomeMenu();
	}

	defaultHomeMenu();

	// Remove no-touch if touch-interface is detected.
	if ('ontouchstart' in document) {
	    $('body').removeClass('no-touch');
	}

	// ABOUT
	$('#menu-item-68').live('click',function(e){
		e.preventDefault();
		openHomeMenu(68);
	});
	// WORK
	$('#menu-item-69').live('click',function(e){
		if ($(this).hasClass('menu-item-object-page')){	
			console.log('sub child');
		}
		else{
			console.log('main child');
			e.preventDefault();
			openHomeMenu(69);
		}	
	});

	$(window).resize(function(){
		defaultHomeMenu();
	});

});