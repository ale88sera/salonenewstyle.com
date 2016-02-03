// Opening hours content
$.getJSON('https://spreadsheets.google.com/feeds/list/1celYChYpLD-DJ186EHeE9hFxOxpRbGz3HnZfVZZOCJc/1/public/values?alt=json', function(data) {

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

// Footer
$.getJSON('https://spreadsheets.google.com/feeds/list/1celYChYpLD-DJ186EHeE9hFxOxpRbGz3HnZfVZZOCJc/2/public/values?alt=json', function(loadFooter) {

  for (var i = 0; i < loadFooter.feed.entry.length; i++) {

    var line ="<p>" + loadFooter.feed.entry[i].gsx$footercontent['$t'];
    if (i==0) {
      // line += " " + Date().getFullYear();
      line += " " + new Date().getFullYear() + "</p>";
    } else {
      line += "</p>";
    }
    // document.getElementById("timeTable").innerHTML += string;
    document.getElementById("footercontent").innerHTML += line;
  }
});
