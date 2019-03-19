var dataTabs = document.querySelectorAll(".data-tabs__tab");

dataTabs.forEach(function(tab) {
  if (window.innerWidth < 600) {
    tab.classList.add("accordion");
    tab.classList.remove("_tabs-tab");
  }
});
