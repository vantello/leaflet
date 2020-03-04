console.log("My map, my friend");

var map = L.map('mapid').setView([41.387241, 2.170004], 16);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

var marker = L.marker([41.387049, 2.166036]).addTo(map);

marker.bindPopup("<b>Restaurant Centfocs</b><br>Cuina Mediterrànea <br>Carrer Balmes, 16 08007 Barcelona");