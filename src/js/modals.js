var openSuccessModalBtn = document.querySelector(".modal#leasing .btn");

openSuccessModalBtn.addEventListener("click", function(e) {
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
