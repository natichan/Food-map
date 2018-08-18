function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      let resultFor = results[i];
      createMarker(resultFor);
      // console.log(results[i]);
      showInformationPhoto(resultFor);
    }
  }
}  


       