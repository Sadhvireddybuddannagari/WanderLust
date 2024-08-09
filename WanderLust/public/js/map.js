
  mapboxgl.accessToken = mapToken;
	// mapboxgl.accessToken = 'pk.eyJ1Ijoic2FkaHZpcmVkZHkyNCIsImEiOiJjbHgxcWExanowZjNqMm1zYWNlNWZrY2ljIn0.Ionq9k3RU6iRFK-Q4vcMxw';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: listing.geometry.coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    //marker

    // const marker = new mapboxgl.Marker( {color: "red"})
    // .setLngat(listing.geometry.coordinates)  //listing.geometry.coordinates
    // .setPopup(new mapboxgl.Popup({ offset: 25}).setHTML(`<h4>${listing.title}</h4><p>I'm Here </p>`))
    // .addTo(map);