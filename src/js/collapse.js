var mobileShowBtn = document.querySelectorAll(".mobile-show-btn");
var wrapTextSizes = {
  "wrap-text index-text": "333px",
  "wrap-text descr-text": "178px",
  "wrap-text equip-text": "222px",
  "wrap-text support-text": "311px",
  "wrap-text news-text": "178px",
  "wrap-text company-text": "444px",
  "wrap-text working-text": "378px",
  "wrap-text reviews-text": "466px",
}

mobileShowBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    var wrapText = btn.previousSibling;
    console.log(wrapText);
    if (wrapText.classList.contains('expanded')) {
      wrapText.classList.remove('expanded');
      var addClass = wrapText.classList;
      console.log(addClass.value);
      var maxHeightText = wrapTextSizes[addClass];
      console.log(maxHeightText);
      wrapText.style.maxHeight = maxHeightText;
      btn.innerHTML = 'Показать полностью';
    } else {
      wrapText.classList.add('expanded');
      wrapText.style.maxHeight = wrapText.scrollHeight + 'px';
      btn.innerHTML = 'Скрыть';
    }
  })

});
