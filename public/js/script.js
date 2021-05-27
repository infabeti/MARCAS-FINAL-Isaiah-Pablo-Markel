  function iniciarMap(){
    var coord = {lat:43.2581172 ,lng: -2.9458896};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

  function iniciarMapRestaurante(){
    var coord = {lat:43.2616494 ,lng: -2.9373267};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

  function iniciarMapCafeteria(){
    var coord = {lat:43.2616185 ,lng: -2.9373267};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 17,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}