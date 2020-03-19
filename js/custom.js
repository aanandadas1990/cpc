(function ($) {
	$(window).bind("load", function () {
		setTimeout(function () {
			$(".progress").fadeOut(500);
			AOS.init({
				once: true,
				// disable: 'mobile',
			});
		}, 500);
	})
	$('.toggle-btn').click(function () {
		$(this).toggleClass('active');
		$('.navigation-box').toggleClass('active');
	});

	

})(jQuery);



$(window).scroll(function () {
	$('.navigation-box').removeClass('active');
	$('.toggle-btn').removeClass('active');
	if ($(window).scrollTop() >= 50) {
		$('header').addClass('fixed');
	}
	else {
		$('header').removeClass('fixed');
	}
})


$(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});








jQuery(document).ready(function(){
	jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > 100) {
	jQuery('#scrollup').fadeIn();
	} else {
	jQuery('#scrollup').fadeOut();
	}
	});
	jQuery('#scrollup').click(function(){
	jQuery("html, body").animate({ scrollTop: 0 }, 400);
	return false;
	});
	});
//script to create sticky header 
jQuery(function(){
    createSticky(jQuery("#sticky-wrap"));
});


	
	
	   wow = new WOW(
	   {
	   animateClass: 'animated',
	   offset:       200
	   }
	   );
	   wow.init();
jQuery(document).ready(function($) {
			jQuery('.stellarnav').stellarNav({
				theme: 'dark',
				breakpoint: 767,
				position: 'right'
				//phoneBtn: '18009997788',
				//locationBtn: 'https://www.google.com/maps'
			});
		});