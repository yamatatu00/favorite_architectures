$(function() {
  $('#about').click(function() {
    console.log(this);
    var speed = 800;
    var about = $('.about__sections').offset().top;
    $('html, body').animate({scrollTop:about}, speed, "swing");
  });
})
