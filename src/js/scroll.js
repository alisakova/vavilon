//для плавного скролла к якорям
$(document).ready(function() {
  $("body").on("click", "._scroll-btn", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
        top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});
