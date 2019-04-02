var infoItems = document.querySelectorAll(".product-card__add-info-item");

if (infoItems) {
  infoItems.forEach(function(item) {
    item.addEventListener('click', function() {
      infoItems.forEach(function(infoItem) {
        var tooltip1 = infoItem.querySelector('.tooltip');
        if (tooltip1.classList.contains('active')) {
          tooltip1.classList.remove('active');
        }
      });
      var tooltip = item.querySelector('.tooltip');
      if (window.innerWidth < 768) {
        tooltip.classList.toggle('active');
      }
    })
  });
}
