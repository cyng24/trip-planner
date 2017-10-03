const mapboxgl = require("mapbox-gl");
const marker = require("./marker");
const centerImage = document.querySelector('#centerImage');
const header = document.querySelector('header');
const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove');
const optionsMenu = document.querySelector('#markerOptions')


mapboxgl.accessToken = "pk.eyJ1IjoicmVqb3ljZSIsImEiOiJjajhicmViNWIwMHp4Mndtczc0c2RsYjhkIn0.vSyKy09QQZzQzJGtAuKRfg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const newMarker = marker("activity", [-74.009151, 40.705086]);
newMarker.addTo(map)

centerImage.classList.add('hide');

setInterval(() => {
  header.classList.remove('start');
}, 1000)

addButton.addEventListener('click', () => {
  console.log("it has been clicked!")
  optionsMenu.classList.add('active')
})
