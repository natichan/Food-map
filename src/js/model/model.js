// variables globales
let map; 
let infowindow; 

navigator.geolocation.getCurrentPosition(initMap);
function initMap(position) {
    
    const lat = position.coords.latitude;
    const lng = position.coords.longitude
    const pos = {lat, lng};
    map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 16
  });
  
      infowindow = new google.maps.InfoWindow(); //ventana de información de cada restaurant
      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: pos,
        radius: 500,
        type: ['restaurant']
      }, callback);
}

