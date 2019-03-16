$(".form__input").on("blur", function() {
  if ($(this).val().length) {
    $(this).addClass("not-empty");
  } else {
    $(this).removeClass("not-empty");
  }
});
