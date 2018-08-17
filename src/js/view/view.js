
function createMarker(place) {
    let marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name)
      infowindow.open(map, this);
    });
  }

function showInformationPhoto(place){
    const photo = place.photos[0].getUrl({'maxHeight': 200});
    const containerInfo = document.getElementById('showPhoto');
    containerInfo.innerHTML += 
    `<img class='col s6 center' src='${photo}'></img>`
    // console.log(photo);
    showModal(place)
}

function showModal(mod){
    const name = mod.name;
    const address = mod.vicinity;
    const rating = mod.rating;

    const containerModal = document.getElementById('modalInfo');
    containerModal.innerHTML = 
    `<h2>${name}</h2>
    <p>Dirección ${address}</p>
    <p>Rating ${rating}</p>` 
    //console.log(name);
    //console.log(address);
  }
  let autocomplete;
  let input = document.getElementById('searchInput');
  function initialize() {

    let options = {
    types: ['(restaurant)'],
    componentRestrictions: {country: "chile"}
    };
    
    autocomplete = new google.maps.places.Autocomplete(input, options);
    }