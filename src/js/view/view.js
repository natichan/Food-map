window.createMarker = (place) => {
    let marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name)
      infowindow.open(map, this);
    });
  }

window.showInformationPhoto = (place) => {
    const photo = place.photos[0].getUrl({'maxHeight': 200});
    const containerInfo = document.getElementById('showPhoto');
    containerInfo.innerHTML += 
    `<img class='col s8 center' src='${photo}'></img>`
    // console.log(photo);
}

window.showModal = (mod) => {
    const containerModal = document.getElementById('modalInfo');
    containerModal.innerHTML = 
    `<h2>${mod.name}</h2>
    <p>Dirección ${mod.vicinity}</p>
    <p>Rating ${mod.rating}</p>` 
  }

/*    let autocomplete;
  let input = document.getElementById('searchInput');
  function initialize() {

    let options = {
    types: ['(restaurant)'],
    componentRestrictions: {country: "chile"}
    };
    
    autocomplete = new google.maps.places.Autocomplete(input, options);
    }  */