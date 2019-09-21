$(function() {

  var $width = 640; // 横幅
  var $height = 300; // 高さ
  var $interval = 3000; // 切り替わりの間隔（ミリ秒）
  var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
  $('.topmain__slider').slick({
    infinite: true,
    fade: true,
    arrows: false,
    speed: 5000,
    autoplay:true,
    autoplaySpeed:2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });
  var effect_btm = 200; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 100; // どのぐらい要素を動かすか(px)
  var effect_time = 2000; // エフェクトの時間(ms) 1秒なら1000

  //親要素と子要素のcssを定義
  $('.scroll-fade-row').css({
    opacity: 0
  });
  $('.scroll-fade-row').children().each(function(){
    $(this).css({
      opacity: 0,
      transform: 'translateY('+ effect_move +'px)',
      transition: effect_time + 'ms'
    });
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
    var scroll_top = $(this).scrollTop();
    var scroll_btm = scroll_top + $(this).height();
    var effect_pos = scroll_btm - effect_btm;

    //エフェクトが発動したとき、子要素をずらしてフェードさせる
    $('.scroll-fade-row').each( function() {
      var this_pos = $(this).offset().top;
      if ( effect_pos > this_pos ) {
        $(this).css({
          opacity: 1,
          transform: 'translateY(0)'
        });
        $(this).children().each(function(i){
          $(this).delay(100 + i*200).queue(function(){
            $(this).css({
              opacity: 1,
              transform: 'translateY(0)'
            }).dequeue();
          });
        });
      }
    });

  $('.about__sections__image img').addClass('move');
  $(window).scroll(function(){
    $(".about__sections__image").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find("img").removeClass('move');
      } else {
        $(this).find("img").addClass('move');
      }
    });
  });
  });
});
