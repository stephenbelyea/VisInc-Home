// Add-in no-touch class by default.
$('body').addClass('no-touch');
var touch  = false;

// Remove hover styling class if touch event is detected.
// Used for specific elements - site-wide.
if ('ontouchstart' in document && !iosDevice) {
    $('body').removeClass('no-touch');
}

$(document).ready(function(){

	// Remove no-touch if touch-interface is detected.
	if ('ontouchstart' in document) {
	    $('body').removeClass('no-touch');
	    touch = true;
	}

	// Setup functions for mobile sized Home page. 
	// Use CSS classes.
	function getTouchMenu($this){
		var id = $this.parent('li').attr('id');
		id = id.replace('menu-item-','');
		return id;
	}; 
	function getHoverMenu($this){
		var id = $this.attr('id');
		id = id.replace('menu-item-','');
		return id;
	};
	function openMobileMenu(num){
		closeMobileMenu();
		$('.menu-item-' + num + ' .sub-menu').addClass('show').delay(200);
		$('.menu_bgs .bg_' + num).addClass('open');
	};
	function closeMobileMenu(){
		$('.menu-item .sub-menu').removeClass('show');
		$('.menu_bgs .menu_bg').removeClass('open');
	};

	// Setup menu items for clickability.
	$('#menu-item-68 a, #menu-item-69 a').addClass('tap-menu');
	$('#menu-item-68 .sub-menu a, #menu-item-69 .sub-menu a').removeClass('tap-menu');

	//if( touch ){
		// Get initial menu item click.
		$('#menu-item-68 a.tap-menu, #menu-item-69 a.tap-menu').live('click', function(event){
			event.preventDefault();
			openMobileMenu(getTouchMenu($(this)));
		});
	//}
	// else{
	// 	$('#menu-item-68 a.tap-menu, #menu-item-69 a.tap-menu').live('click', function(e){
	// 		e.preventDefault();
	// 		openMobileMenu(getTouchMenu($(this)));
	// 	});
	// 	// Get initial menu item hover.
	// 	$('#menu-item-68, #menu-item-69').live('mouseenter', function(){
	// 		openMobileMenu(getHoverMenu($(this)));
	// 	}).live('mouseleave', function(){
	// 		closeMobileMenu();
	// 	});
	// }

});