var openSuccessModalBtn = document.querySelectorAll(".modal ._open-success");

if (openSuccessModalBtn) {
  openSuccessModalBtn.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      var instance = $.fancybox.getInstance();
      e.preventDefault();
      if (instance) {
        instance.close();
        $.fancybox.open({
          src  : '#success-modal',
          type : 'inline'
        });
      }
    })
  })

}

var makeOrderBtn = document.querySelector(".modal .basket__mobile-btn");

if (makeOrderBtn) {
  makeOrderBtn.addEventListener("click", function(e) {
    var instance = $.fancybox.getInstance();
    e.preventDefault();
    if (instance) {
      instance.close();
      $.fancybox.open({
        src  : '#make-order',
        type : 'inline'
      });
    }
  })
}
