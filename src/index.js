const mapboxgl = require("mapbox-gl");
const marker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoicmVqb3ljZSIsImEiOiJjajhicmViNWIwMHp4Mndtczc0c2RsYjhkIn0.vSyKy09QQZzQzJGtAuKRfg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newMarker = marker("hotel", [-74.009151, 40.705086]);
newMarker.addTo(map)
console.log(newMarker.getLngLat());