$(document).ready(function() {
    $('.filter__select').select2({
      minimumResultsForSearch: Infinity,
      width: 'resolve'
    });
    $('.form__select').select2({
      minimumResultsForSearch: Infinity,
      dropdownParent: $('.form')
    });
});
