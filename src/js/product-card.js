var mainProductCard = document.querySelector(".product-card__img img");
var imgPreviews = document.querySelectorAll(".product-card__img-preview");

if (mainProductCard) {
  imgPreviews.forEach(function(preview) {
    preview.addEventListener("click", function() {
      removeClass(imgPreviews);
      preview.classList.add("active");
      var img = preview.querySelector("img");
      mainProductCard.src = img.src;
    });
  })
}

function removeClass(array) {
  array.forEach(function(item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    }
  })
}
