
var map = L.map('map', {attributionControl: false}).setView([25.2017110, 55.2784340], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([25.2017110, 55.2784340]).addTo(map);