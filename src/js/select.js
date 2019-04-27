$(document).ready(function() {
    $('.filter__select').select2({
      minimumResultsForSearch: Infinity,
      width: 'resolve'
    });
    $('.form__select').select2({
      minimumResultsForSearch: Infinity,
      dropdownCssClass: "select_form"
      // dropdownParent: $('.form__item:nth-child(3)')
    });
});
