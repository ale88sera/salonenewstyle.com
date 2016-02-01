// Opening hours content
$.getJSON('https://spreadsheets.google.com/feeds/list/1celYChYpLD-DJ186EHeE9hFxOxpRbGz3HnZfVZZOCJc/od6/public/values?alt=json', function(data) {

  var tableContent = "";
  for (var i = 0; i < data.feed.entry.length; i++) {

    var day = data.feed.entry[i].gsx$dayname['$t'];
    var timeValue = data.feed.entry[i].gsx$statusvalue['$t'];
    if (data.feed.entry[i].gsx$statusvalue['$t'] == "Chiuso") {
      string = '<tr class="warning"><td>'+ day +'</td><td>'+ timeValue +'</td></tr>';
    } else {
      string = '<tr><td>'+ day +'</td><td>'+ timeValue +'</td></tr>';
    }
    document.getElementById("timeTable").innerHTML += string;
  }
});

// google map
function initialize() {
  var mapCanvas = document.getElementById('map');
  var myLatLng = new google.maps.LatLng(45.537258, 12.637071);
  var mapOptions = {
    center: myLatLng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: 'img/marker.png'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
