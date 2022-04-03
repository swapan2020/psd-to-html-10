$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items:1,
		loop:true,
		nav:true,
		dots:true,
		autoplay:true,
		autoplaySpeed:1000,
		smartSpeed:1500,
		autoplayHoverPause:true
	});
});
// IMAGE FILTER JS
// init Isotope
// init Isotope
var $grid = $('.image-items').isotope({
	// options
  });
  // filter items on button click
  $('.filter-menu').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
  });
//   SCROLL UP BUTTON
window.addEventListener('scroll', function(){
	var x = document.querySelector('.scrollTop');
	x.classList.toggle('active', window.scrollY > 500);
});

function myfunction(){
	window.scrollTo({
		top:0,
		behavior:"smooth"
	});
};
// MOBILE MENU JS
document.querySelector('.mobile-menu').addEventListener('click',function(){
	document.querySelector('.menu').classList.add('show');
});

document.querySelector('.close-menu').addEventListener('click',function(){
	document.querySelector('.menu').classList.remove('show');
});