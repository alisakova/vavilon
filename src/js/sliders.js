$(document).ready(function(){
  if ($('._slider').length) {
    $('._slider').slick({
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 15000,
      fade: true,
      arrows: false,
      dots: true,
    });
  }
  if ($('.companies-slider').length) {
    $('.companies-slider').slick({
      slidesToShow: 5,
      infinite: true,
      // adaptiveHeight: true
    });
  }
});
