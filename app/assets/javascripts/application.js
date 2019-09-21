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

