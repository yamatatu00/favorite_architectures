$(function() {
  $('#new-comment').on('submit', function(e) {
    if ($('#comment').val() == '') {
      return false;
    }
    e.preventDefault();
  })
  $(document).on('ajax:success', 'form', function(e) {
    $('#comment').val('');
    $('.show-contents__content__container__comments').prepend('<p>'+'<strong>'+e.detail[0]['name']+'：'+'</strong>'+e.detail[0]['comment']+'</p>');
  })
})