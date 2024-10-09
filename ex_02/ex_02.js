document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([46.86, 2.966], 6);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var locations = [
    ['Bordeaux rocks!', 44.87, -0.577],
    ['Nantes rocks!', 47.20, -1.57], 
    ['Lyon rocks!', 45.768, 4.833],
    ['Paris rocks!', 48.86, 2.375] ,
    ['Toulouse rocks!', 43.61, 1.428] ,
];
var customIcon = L.icon({    iconUrl: 'https://www.pngkit.com/png/detail/459-4596239_epitech-epitech-logo-transparent.png',
    iconSize: [32, 40], 
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

locations.forEach(function(location) {
    var name = location[0];
    var latLng = [location[1], location[2]];

    L.marker(latLng, { icon: customIcon },)
        .addTo(map)
        .bindPopup(name); 
});
});
