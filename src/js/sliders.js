$(document).ready(function() {
  if ($("._slider").length) {
    $("._slider").slick({
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 15000,
      fade: true,
      arrows: false,
      dots: true,
    });
    $(".intro-slider .slick-dots").wrap("<div class=\"container\"><div class=\"slick-dots-wrapper\"></div></div>");
  }
  if ($(".companies-slider").length) {
    $(".companies-slider").slick({
      slidesToShow: 5,
      infinite: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2
          }
        }
      ]
      // adaptiveHeight: true
    });
  }
});
