$(function () {
  
  $('#open').on('click', function () {
    $(this).addClass('hide');
    $('.overlay').addClass('show');
  });
  $('#close').on('click', function () {
    $('.overlay').removeClass('show');
    $('#open').removeClass('hide');
  });

});