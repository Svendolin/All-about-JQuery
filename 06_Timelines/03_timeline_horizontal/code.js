

$('.point').click( function () {
  $('.point-content').not($(this).find('.point-content')).slideUp()
  $(this).find('.point-content').slideToggle()
})