$(function() {
  $(window).bind("load", function(){
    if(document.URL.match(/..products/)) {
      // 地図を作成する
      var mymap = L.map('map');
      var lat = $('.lat').val();
      var lng = $('.lng').val();
      var title = $('.title').val();
      // タイルレイヤーを作成し、地図にセットする
      L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
      }).addTo(mymap);
      // 地図の中心座標とズームレベルを設定する
      if(!lat && !lng){
        mymap.setView([35.6812480009928, 139.767336845398], 8);
      }else{
        mymap.setView([lat, lng], 8);
        // マーカーを作成する
        var marker = L.marker([lat, lng]).addTo(mymap);
        // // クリックした際にポップアップメッセージを表示する
        marker.bindPopup(title);
      }
      
      mymap.on('click', function(e) {
        //クリック位置経緯度取得
        lat = e.latlng.lat;
        lng = e.latlng.lng;
        //経緯度表示
        // alert("緯度: " + lat + ", 経度: " + lng);
      
        if(typeof(marker)==="undefined"){
        marker = new L.marker(e.latlng,{ draggable: true});
        marker.addTo(mymap);
        mymap.setView([lat, lng], 8);
        $('#lat').val(lat);
        $('#lng').val(lng);
        }
        else
        {
        marker.setLatLng(e.latlng);
        mymap.setView([lat, lng], 8);
        $('#lat').val(lat);
        $('#lng').val(lng);
        } 
      });
    }
  });
})
