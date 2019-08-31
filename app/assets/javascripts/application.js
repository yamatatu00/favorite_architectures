// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery 
//= require rails-ujs
//= require activestorage
//= require_tree .


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







  

  // var effect_pos = 300; // 画面下からどの位置でフェードさせるか(px)
  // var effect_move = 50; // どのぐらい要素を動かすか(px)
  // var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

  // // フェードする前のcssを定義
  // $('.about__sections__image').css({
  //   opacity: 0,
  //   transform: 'translateY('+ effect_move +'px)',
  //   transition: effect_time + 'ms'
  // });

  // // スクロールまたはロードするたびに実行
  // $(window).on('scroll load', function(){
  //   var scroll_top = $(this).scrollTop();
  //   var scroll_btm = scroll_top + $(this).height();
  //   effect_pos = scroll_btm - effect_pos;

  //   // effect_posがthis_posを超えたとき、エフェクトが発動
  //   $('.about__sections__image').each( function() {
  //       var this_pos = $(this).offset().top;
  //       if ( effect_pos > this_pos ) {
  //           $(this).css({
  //             opacity: 1,
  //             transform: 'translateY(0)'
  //           });
  //       }
  //   });
  // });


  

});

function test1(){
	
  var text1 = $('#text1').val();
  
  var data = {
      "titles":text1,
      "format":"json",
    };
  
  var url="http://ja.wikipedia.org/w/api.php?action=query&export";

  $.ajax({
    type: 'GET',
    url: url,
    data: data,
    cache: false,
    dataType: "jsonp",
    // dataType: "JSON", // data type expected from server
    success: function (data) {
      console.log(data);
    },
    error: function(error) {
      console.log('Error: ' + error);
    }
  });

  // // AJAX非同期通信
  // $.ajax({
  //   url: url,
  //   data: data,
  //   cache: false,
  //   dataType: "jsonp",
  //   success: function(json, type) {
      
  //     // JSONレスポンスから、XML形式の文章情報を取得する。
  //     var xmlDoc = json['query']['export']['*'];

  //     // 文章情報XMLをjQueryで扱えるようにする。
  //     var xml = $(xmlDoc);

  //     // XMLからtextタグ内テキストをページ情報として取得する。
  //     var page = xml.find('text').html();

  //     // ページ情報はWiki記法なる方法で記述されている。（もしくはマークダウン記法）
  //     console.log(page);
      
  //     // ※ Wiki記法をHTML形式にパースする処理が必要であるが、このソースコードでは割愛する。

  //   },
  //   error: function(xmlHttpRequest, textStatus, errorThrown){
  //     $('#res').html(xmlHttpRequest.responseText);
      
  //   }
  // });
}

