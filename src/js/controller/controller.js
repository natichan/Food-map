navigator.geolocation.getCurrentPosition(initMap);

function initMap(position) {
    
    const lat = position.coords.latitude;
    const lng = position.coords.longitude
    const pos = {lat, lng};
    map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 16
  });
};
       