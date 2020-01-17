$(function(){

	//slider
  $('.slider__inner, .news__slider-inner').slick({ // $('.single-item').slick();  https://kenwheeler.github.io/slick/
  	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  	infinite: false
  });

  $('select').styler();

  $('.header__btn-menu').on('click', function(){
  	$('.menu ul').slideToggle();
  });

});