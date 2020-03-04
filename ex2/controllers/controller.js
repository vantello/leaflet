console.log("My map, my friend");

var map = L.map('mapid').setView([41.387241, 2.170004], 16);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     {
         maxZoom: 18
     }).addTo(map);

var popup = L.popup();

map.on('click', function (e){

    popup
        .setLatLng(e.latlng) // Sets the geographical point where the popup will open.
        .setContent("<b>Les coordenades són:</b><br> " +  e.latlng.lat.toString() + "," +  e.latlng.lng.toString()) // Sets the HTML content of the popup.
        .openOn(map) // Adds the popup to the map and closes the previous one. 
    map.setView(e.latlng, 18);

});

